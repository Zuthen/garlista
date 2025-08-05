import React from "react";
import { render } from "@testing-library/react-native";
import Header from "./Header";

describe("Header", () => {
    it("should contain img and text", () => {
        const sut = render(<Header />);
        sut.getByText("Gar-lista")
        sut.getByLabelText("Logo")
    });
});
