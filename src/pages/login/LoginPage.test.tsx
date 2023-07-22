import { render, screen } from "@testing-library/react"
import { LoginPage } from "./LoginPage"

describe("Login page", () => {
  it("should render login title", () => {
    render(<LoginPage />)

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument()
  })
  it("should render form inputs email/password and submit button", () => {
    render(<LoginPage />)

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument()
    expect(
      screen.getByRole("textbox", { name: /password/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument()
  })
})
