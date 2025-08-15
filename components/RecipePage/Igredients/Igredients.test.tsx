import { fireEvent, render, within } from "@testing-library/react-native"
import { Igredients } from "./Igredients"

describe("Igredients", () => {
    const testIngredients = [
        { name: 'Syrop klonowy', quantity: 20, unit: 'ml' },
        { name: 'Mąka pszenna', quantity: 500, unit: 'g' },
        { name: 'Cukier', quantity: 200, unit: 'g' },
        { name: 'Masło', quantity: 100, unit: 'g' },
        { name: 'Jajka', quantity: 3, unit: 'szt.' },
        { name: 'Mleko', quantity: 250, unit: 'ml' },
        { name: 'Sól', quantity: 5, unit: 'g' },
    ]
    it("should contain title and editable list", () => {
        // Arrange
        const sut = render(<Igredients igredients={testIngredients} />)
        // Assert
        sut.getByText("Składniki")
        testIngredients.forEach(igredient => {
            const item = sut.getByDisplayValue(igredient.name)
            const quantity = within(item).queryByText(igredient.quantity.toString())
            const unit = within(item).queryByText(igredient.unit)
            expect(quantity).not.toBeNull
            expect(unit).not.toBeNull
        })
    })
    it("igredient should be editable", () => {
        // Arrange
        const testIgredient = { name: "Test name", quantity: 387, unit: "miles" }
        const changedValue = { name: "Other name", quantity: 5, unit: "years" }

        const sut = render(<Igredients igredients={[testIgredient]} />)
        // Act
        const name = sut.getByDisplayValue(testIgredient.name)
        fireEvent.changeText(name, changedValue.name)

        const quantity = sut.getByDisplayValue(testIgredient.quantity.toString())
        fireEvent.changeText(quantity, changedValue.quantity)

        const unit = sut.getByDisplayValue(testIgredient.unit)
        fireEvent.changeText(unit, changedValue.unit)

        // Assert
        sut.getAllByDisplayValue(changedValue.name)
        sut.getAllByDisplayValue(changedValue.quantity.toString())
        sut.getAllByDisplayValue(changedValue.unit)
    })

})