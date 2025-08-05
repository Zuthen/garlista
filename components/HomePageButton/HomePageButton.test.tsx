import { render } from "@testing-library/react-native"
import { HomePageButton } from "./HomePageButton"
import { Text } from "react-native"

describe("HomepageButton", () => {
    it("should display text and child", () => {
        // Arrange
        const testText = "Test Text"
        const childText = "Child Text"
        const sut = render(<HomePageButton color="white" text={testText}><Text>{childText}</Text></HomePageButton>)
        // Assert
        sut.getByText(testText)
        sut.getByText(childText)
    })
})