import { useState } from "react"
import { Typography, TextField, Button } from "@mui/material"
import { Formik, Form } from "formik"
import { loginSchema } from "./loginSchema"
import axios from "axios"
import { useMutation } from "react-query"

interface Inputs {
  email: string
  password: string
}

const initialValues: Inputs = {
  email: "",
  password: "",
}

const login = async (body: Inputs) => {
  try {
    await axios.post("/login", body)
  } catch (error) {
    console.log(error)
  }
}

export const LoginPage = () => {
  const mutation = useMutation({
    mutationFn: (values: Inputs) => login(values),
  })
  return (
    <>
      <Typography component={"h1"}>Login</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          mutation.mutate(values)
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
            <Button type='submit' disabled={mutation.isLoading}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
