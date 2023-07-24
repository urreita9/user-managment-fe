import { useState } from "react"
import { Typography, TextField, Button } from "@mui/material"
import { Formik, Form } from "formik"
import { loginSchema } from "./loginSchema"
import axios from "axios"

interface Inputs {
  email: string
  password: string
}

const initialValues: Inputs = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const login = async (body: Inputs) => {
    try {
      await axios.post("/login", body)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Typography component={"h1"}>Login</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          setIsLoading(true)
          await login(values)
        }}
      >
        {(formik) => (
          <Form>
            <TextField
              name='email'
              label='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              name='password'
              label='password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button type='submit' disabled={isLoading}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
