import {
    createPrinter,
    createSourceFile, EmitHint,
    factory,
    NewLineKind,
    ReturnStatement,
    ScriptKind,
    ScriptTarget,
    SyntaxKind
} from "typescript";

export type RouteType = {
    path: string;
    component: string;
}

const importTemplate = () => {
    const statement = factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createImportClause(false, factory.createIdentifier('React'), undefined),
        factory.createStringLiteral('react')
    )
    return statement
}

const componentTemplate = (): ReturnStatement => {
    const div = factory.createIdentifier("div")
    const openingElement = factory.createJsxOpeningElement(div, [], factory.createJsxAttributes([]))
    const closingElement = factory.createJsxClosingElement(div)
    const jsxElement = factory.createJsxElement(openingElement, [], closingElement)
    return factory.createReturnStatement(jsxElement)
}

const makeReactAppFunction = (name: string) => {

    const paramName = factory.createIdentifier("props")
    const parameter = factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        paramName
    )
    const makeArrowFunction = factory.createArrowFunction(
        undefined,
        undefined,
        [parameter],
        undefined,
        undefined,
        factory.createBlock([componentTemplate()], true))
    const varStatement = factory.createVariableDeclaration(name,
        undefined,
        factory.createLiteralTypeNode(factory.createRegularExpressionLiteral('FC<PropsType>')),
        makeArrowFunction)
    const result = factory.createVariableStatement(
        [factory.createModifier(SyntaxKind.ConstKeyword)],
        [varStatement]
    )
    return result
}

const exportTemplate = () => {
    const statement = factory.createExportDeclaration(
        [],
        undefined,
        false,
        undefined,
        )
    return statement
}

const template = () => {
    return factory.createBlock([
        importTemplate(),
        makeReactAppFunction("App"),
        exportTemplate()
    ], true)
}

export const renderComponent = (name: string) => {
    const printer = createPrinter({newLine: NewLineKind.LineFeed})
    const sourceFile = createSourceFile("sourceFileName.ts", "", ScriptTarget.Latest, false, ScriptKind.TS)
    const result = printer.printNode(EmitHint.Unspecified, template(), sourceFile)
    return result
}

export default renderComponent
