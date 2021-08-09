import {camelCase} from "change-case";

const renderStyle = (name: string) => {
    const className = camelCase(name)
    const style = `.${className} {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ff0000;
  height: 100%;
}
`
    return style
}

export default renderStyle
