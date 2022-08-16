import incrementalName from '../index'
// @ponicode
describe("index", () => {
    test("1", () => {
        let result = incrementalName({ existingNames: [], name: 'test' })
        expect(result).toBe("test")
    })

    test("2", () => {
        let result = incrementalName({ existingNames: ["test"], name: 'test' })
        expect(result).toBe("test_1")
    })

    test("3", () => {
        let result = incrementalName({ existingNames: ["test", "test_1", "test_2"], name: 'test' })
        expect(result).toBe("test_3")
    })

    test("4", () => {
        let result = incrementalName({})
        expect(result).toBe("")
    })

    test("5", () => {
        let result = incrementalName(null)
        expect(result).toBe("")
    })

    test("6", () => {
        let result = incrementalName([])
        expect(result).toBe("")
    })
})
