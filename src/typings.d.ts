declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}
