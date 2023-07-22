import { render, screen } from "@testing-library/react"
import { LoginPage } from "./LoginPage"

describe("Login page", () => {
  it("should render login title", () => {
    render(<LoginPage />)

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument()
  })
  it("should render form inputs email/password and submit button", () => {
    render(<LoginPage />)

    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const passwordInput = screen.getByRole("textbox", { name: /password/i })
    const submitButton = screen.getByRole("button", { name: /submit/i })

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
