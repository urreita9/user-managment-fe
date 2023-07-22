import { render, screen } from "@testing-library/react"
import { LoginPage } from "./LoginPage"

describe("Login page", () => {
  it("should render login title", () => {
    render(<LoginPage />)

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument()
  })
})
