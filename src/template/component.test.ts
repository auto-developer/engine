import renderComponent from "./component"

describe("test component", () => {
    it("print", () => {
        const component = renderComponent("User")
        expect(component).toEqual("")
    })
})
