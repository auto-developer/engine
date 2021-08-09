export type ParamType = {}

export const createStore = (name: string, param: ParamType) => {
    const STORE_NAME = name;
    const IMPORT = `import {makeAutoObservable} from "mobx";`
    const HEAD = `export default class ${STORE_NAME} {`
    const PARAM = `authorized: boolean = true;`

    const CONSTRUCTOR = `
    constructor() {
        makeAutoObservable(this)
    }`

    const FUNCTION = `setAuthorized(authorized: boolean) {
        this.authorized = authorized
    }`

    const FOOTER = `}`

    const template = `${IMPORT}
    ${HEAD}
    ${PARAM}
    ${CONSTRUCTOR}
    ${FUNCTION}
    ${FOOTER}
    `
    return template
}
