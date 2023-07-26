import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material"
import { Formik, Form } from "formik"
import { loginSchema } from "./loginSchema"
import { useLoginMutation } from "./useLoginMutation"
import { Inputs } from "./loginPage.interfaces"

const initialValues: Inputs = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  const mutation = useLoginMutation()
  return (
    <>
      <Typography component={"h1"}>Login</Typography>

      {mutation.isLoading && (
        <CircularProgress
          color='primary'
          role='progressbar'
          aria-label='loading'
        />
      )}

      {mutation.isError && (
        <Alert severity='error'>Unexpected error, please try again</Alert>
      )}

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
