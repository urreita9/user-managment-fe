import { useMutation } from "react-query"
import axios from "axios"
import { Inputs } from "./loginPage.interfaces"
import { baseUrl } from "../../config"

const login = async (body: Inputs): Promise<void> =>
  await axios.post(`${baseUrl}/login`, body)

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (values: Inputs) => login(values),
  })

export type statusErrorMsg = 500 | 401
export const statusErrorMessages: Record<statusErrorMsg, string> = {
  401: "Wrong credentials: email or password incorrect",
  500: "Unexpected error, please try again",
}

export const FALLBACK_ERROR_MESSAGE = "Default error message"
