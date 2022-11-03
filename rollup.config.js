import fs from 'fs'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import ts from 'typescript'
import typescript from 'rollup-plugin-typescript2'
import svg from 'rollup-plugin-svg'
import CleanCss from 'clean-css'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default {
  watch: {
    include: 'src/**'
  },
  input: pkg.source || 'src/index.tsx',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    {
      file: `./${pkg.module}`,
      format: 'es',
      sourcemap: true
    },
    {
      file: `./${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    scss({
      failOnError: true,
      processor: () => postcss([autoprefixer()]),
      output: async function (styles) {
        const dirname = 'dist/css/'
        fs.mkdirSync(dirname, { recursive: true })
        fs.writeFileSync(dirname + pkg.name + '.css', styles)
        const compressed = new CleanCss().minify(styles).styles
        fs.writeFileSync(dirname + pkg.name + '.min.css', compressed)
      }
    }),
    resolve(),
    commonjs(),
    svg(),
    typescript({
      typescript: ts,
      tsconfig: 'tsconfig.json'
    }),
    terser({
      output: {
        comments: false
      }
    }),
    copy({
      targets: [{ src: 'src/scss/**/*', dest: 'dist/scss/' }]
    })
  ]
}
