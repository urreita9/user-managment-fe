import { useMutation } from "react-query"
import axios from "axios"
import { Inputs } from "./loginPage.interfaces"

const login = async (body: Inputs) => {
  try {
    await axios.post("/login", body)
  } catch (error) {
    console.log(error)
  }
}
export const useLoginMutation = () =>
  useMutation({
    mutationFn: (values: Inputs) => login(values),
  })
