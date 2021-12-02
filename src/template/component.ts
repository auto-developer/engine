import * as ts from "typescript";
import {ConstKeyword, ExclamationToken, ModifierFlags, NodeFlags} from "typescript";

export type RouteType = {
    path: string;
    component: string;
}
export type RouterType = RouteType[]

export const renderComponent = (name: string) => {
    function makeReactAppFunction() {
        const statement = ts.factory.createImportDeclaration(
            undefined,
            undefined,
            ts.factory.createImportClause(false, ts.factory.createIdentifier('React'), undefined),
            ts.factory.createStringLiteral('react'))

        const div = ts.factory.createIdentifier("div")
        const openingElement = ts.factory.createJsxOpeningElement(div, [], ts.factory.createJsxAttributes([]))
        const closingElement = ts.factory.createJsxClosingElement(div)
        const jsxElement = ts.factory.createJsxElement(openingElement, [], closingElement)
        const returnStatement = [ts.factory.createReturnStatement(jsxElement)]
        const makeFunction = ts.factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            undefined,
            ts.factory.createBlock(returnStatement, true))
        const varStatement = ts.factory.createVariableDeclaration(name, undefined, ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword), makeFunction)
        const result = ts.factory.createVariableStatement(
            [ts.factory.createModifier(ts.SyntaxKind.ConstKeyword)],
            [varStatement]
        )
        return result
        //  type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    }

    const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed})
    const sourceFile = ts.createSourceFile("sourceFileName.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    const result = printer.printNode(ts.EmitHint.Unspecified, makeReactAppFunction(), sourceFile)
    console.log(result)
    return result
}

export default renderComponent
