import { fireEvent, render } from "@testing-library/react-native"
import { HeaderName } from "../RecipePage/HeaderName/HeaderName"
import { NumberInput } from "./NumberInput/NumberInput"


const testcases = [
    {
        component: <HeaderName />,
        testValue: "test value",
        name: "Header Name"
    },
    {
        component: <NumberInput />,
        testValue: "26",
        name: "Number Input"
    }
]
testcases.forEach(testcase => {
    describe(testcase.name, () => {
        it("should display icon by default", () => {
            // Arrange
            const sut = render(testcase.component)
            // Assert
            expect(sut.queryByRole('image')).toBeDefined()
        })

        it("should not display icon in edit mode", () => {
            // Arrange
            const sut = render(testcase.component)
            // Act
            fireEvent.press(sut)
            // Assert
            expect(sut.queryByRole('image')).toBeNull()
        })

        it("should display icon when vaule set and focus out", () => {
            // Arrange
            const testValue = testcase.testValue
            const sut = render(testcase.component)
            // Act
            fireEvent.press(sut)
            fireEvent.changeText(sut, testValue)
            fireEvent(sut, 'blur')
            // Assert
            expect(sut.queryByRole('image')).toBeDefined()
        })
    })
})