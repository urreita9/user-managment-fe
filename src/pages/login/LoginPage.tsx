import { Typography, TextField, Button } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"

const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
})

const initialValues = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <>
      <Typography component={"h1"}>Login</Typography>

      <form onSubmit={formik.handleSubmit}>
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
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )
}
