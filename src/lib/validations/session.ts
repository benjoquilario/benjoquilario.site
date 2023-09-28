import * as z from "zod"

export const session = z.object({
  email: z.string(),
  name: z.string(),
})
