import { Typography, TextField, Button } from "@mui/material"

export const LoginPage = () => {
  return (
    <>
      <Typography component={"h1"}>Login</Typography>
      <TextField label='email' />
      <TextField label='password' />
      <Button>Submit</Button>
    </>
  )
}
