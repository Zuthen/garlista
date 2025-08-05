import { fireEvent, render, within } from "@testing-library/react-native"
import { Select } from "./Select"

describe("Select", () => {
    it("Should contain passed labels", () => {
        // Arrange
        const testOptions = [
            { label: "Bananowy ninja 🍌", value: 101 },
            { label: "Mrożony arbuz 🧊🍉", value: "watermelon_frost" },
            { label: "Awokado w kapeluszu 🥑🎩", value: { id: 3, funny: true } },
            { label: "Pomarańczowy kosmonauta 🚀🍊", value: 42 },
            { label: "Truskawkowy detektyw 🕵️‍♂️🍓", value: "strawberry_detective" },
            { label: "Ananasowy surfer 🏄‍♂️🍍", value: [1, 2, 3] },
            { label: "Winogrono w smokingu 🍇🤵", value: null },
        ]
        const defaultValue = testOptions[3]
        const sut = render(<Select options={testOptions} defaultValue={defaultValue} />)

        //Act
        const select = sut.getByText(defaultValue.label)
        fireEvent.press(select)

        //Assert
        const modal = sut.getByLabelText("modal")
        testOptions.forEach(option => {
            within(modal).getByText(option.label)
        })
    })
})