// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"
import { queryClient } from "./mocks/renderWithProviders"
import { server } from "./mocks/server"

jest.mock("./config.ts", () => ({
  baseUrl: "http://mock-server.com",
}))

beforeEach(() => queryClient.clear())

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
