import { screen } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./mocks/renderWithProviders"

describe("App", () => {
  it("should render LoginPage", () => {
    renderWithProviders(<App />)

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument()
  })
})
