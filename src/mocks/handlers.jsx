/* eslint-disable */
import { rest } from 'msw'


export const handlers = [
  rest.get("http://localhost:3000/data/user.json", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.post("http://localhost:3000/data/user.json", async (req, res, ctx) => {
    const data = await req.json()
    user.push(data);

    return res(ctx.status(201));
  }),
];