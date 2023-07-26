import { useMutation } from "react-query"
import axios from "axios"
import { Inputs } from "./loginPage.interfaces"

const login = async (body: Inputs) => await axios.post("/login", body)

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (values: Inputs) => login(values),
  })
