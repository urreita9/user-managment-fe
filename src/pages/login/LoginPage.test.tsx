import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginPage } from "./LoginPage"

const getSubmitBtn = () => screen.getByRole("button", { name: /submit/i })
const getEmailInput = () => screen.getByRole("textbox", { name: /email/i })
const getPasswordInput = () => screen.getByLabelText(/password/i)

describe("Login page", () => {
  it("should render login title", () => {
    render(<LoginPage />)

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument()
  })
  it("should render form inputs email/password and submit button", () => {
    render(<LoginPage />)

    expect(getEmailInput()).toBeInTheDocument()
    expect(getPasswordInput()).toBeInTheDocument()
    expect(getSubmitBtn()).toBeInTheDocument()
  })
  it("should validate: inputs (email/password) are required", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    await user.click(getSubmitBtn())

    const emailRequired = await screen.findByText(/email is required/i)
    const passwordRequired = await screen.findByText(/password is required/i)

    expect(emailRequired).toBeInTheDocument()
    expect(passwordRequired).toBeInTheDocument()
  })
  it("email should have propper format", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(getEmailInput(), "invalidEmail.com")
    await user.click(getSubmitBtn())

    const emailInvalidFormat = await screen.findByText(/must be a valid email/i)

    expect(emailInvalidFormat).toBeInTheDocument()
  })
  it("should disable submit button when fetching", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    expect(getSubmitBtn()).not.toBeDisabled()

    await user.type(getEmailInput(), "email@mail.com")
    await user.type(getPasswordInput(), "123456")
    await user.click(getSubmitBtn())

    await waitFor(() => expect(getSubmitBtn()).toBeDisabled())
  })
})
