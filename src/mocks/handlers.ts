import { rest } from "msw"

export const handlers = [
  rest.post("/login", (req, res, ctx) => res(ctx.delay(1000), ctx.status(200))),
]
