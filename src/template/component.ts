import * as ts from "typescript";

export type RouteType = {
    path: string;
    component: string;
}
export type RouterType = RouteType[]

export const renderComponent = (name: string) => {
    function makeFactorialFunction() {
        const functionName = ts.factory.createIdentifier(name);
        const paramName = ts.factory.createIdentifier("n");
        const parameter = ts.factory.createParameterDeclaration(
            /*decorators*/ undefined,
            /*modifiers*/ undefined,
            /*dotDotDotToken*/ undefined,
            paramName
        );

        const condition = ts.factory.createBinaryExpression(paramName, ts.SyntaxKind.LessThanEqualsToken, ts.factory.createNumericLiteral(1));
        const ifBody = ts.factory.createBlock([ts.factory.createReturnStatement(ts.factory.createNumericLiteral(1))], /*multiline*/ true);

        const decrementedArg = ts.factory.createBinaryExpression(paramName, ts.SyntaxKind.MinusToken, ts.factory.createNumericLiteral(1));
        const recurse = ts.factory.createBinaryExpression(paramName, ts.SyntaxKind.AsteriskToken, ts.factory.createCallExpression(functionName, /*typeArgs*/ undefined, [decrementedArg]));
        const statements = [ts.factory.createIfStatement(condition, ifBody), ts.factory.createReturnStatement(recurse)];

        const componentFun = ts.factory.createArrowFunction(
            /*modifiers*/ undefined,
            /*typeParameters*/ undefined,
            [parameter],
            /*asteriskToken*/ undefined,
            undefined,
            ts.factory.createBlock(statements, /*multiline*/ true)
        );

        const result = ts.factory.createVariableDeclaration(functionName, undefined, undefined, componentFun)
        return result
        //  type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    }


    const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed})
    const sourceFile = ts.createSourceFile("sourceFileName.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    const result = printer.printNode(ts.EmitHint.Unspecified, makeFactorialFunction(), sourceFile)
    return result
}

export default renderComponent
