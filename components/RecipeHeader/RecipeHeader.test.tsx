import { fireEvent, render, within } from "@testing-library/react-native"
import RecipeHeader from "./RecipeHeader"


const amountLabels = [
    'porcji',
    'sztuk',
    'g',
    'kg',
    'litr',
    'ml'
]
describe("Receipe Header", () => {
    it("should contain name field, label, amount field and amount select", () => {
        // Arrange
        const sut = render(<RecipeHeader />)
        // Assert
        sut.getByPlaceholderText("Nazwa")
        sut.getByText("Przepis na")
        sut.getByPlaceholderText("ile?")
        sut.getByText("porcji")
    })

    it(`Amount select should contain all amounts`, () => {
        // Arrange
        const sut = render(<RecipeHeader />)
        // Act
        const amountSelect = sut.getByText("porcji")
        fireEvent.press(amountSelect)
        const modal = sut.getByLabelText("modal")
        // Assert
        amountLabels.forEach(amount => {
            within(modal).getByText(amount)
        })
    })

})