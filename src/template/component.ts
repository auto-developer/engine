import * as ts from "typescript";

export type RouteType = {
    path: string;
    component: string;
}
export type RouterType = RouteType[]

export const renderComponent = (name: string) => {
    function makeReactAppFunction() {
        const statement = ts.factory.createImportDeclaration(
            /*decorators*/ undefined,
            /*modifiers*/ undefined,
            ts.factory.createImportClause(false, ts.factory.createIdentifier('React'), /*namedBindings*/ undefined),
            ts.factory.createStringLiteral('react'))

        const functionName = ts.factory.createIdentifier("App")
        const openingElement = ts.factory.createJsxOpeningElement(ts.factory.createIdentifier("Router"), [], ts.factory.createJsxAttributes([]))
        const closingElement = ts.factory.createJsxClosingElement(ts.factory.createIdentifier("Router"))
        const jsxElement = ts.factory.createJsxElement(openingElement, [], closingElement)
        const returnStatement = [ts.factory.createReturnStatement(jsxElement)]
        const makeFunction = ts.factory.createFunctionExpression(
            /*modifiers*/ undefined,
            /*asteriskToken*/ undefined,
            functionName,
            /*typeParameters*/ undefined,
            /*parameters*/ undefined,
            /*returnType*/ undefined,
            ts.factory.createBlock(returnStatement, /*multiline*/ true))
        return makeFunction
        //  type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    }

    const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed})
    const sourceFile = ts.createSourceFile("sourceFileName.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    const result = printer.printNode(ts.EmitHint.Unspecified, makeReactAppFunction(), sourceFile)
    return result
}

export default renderComponent
