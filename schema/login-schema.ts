import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  code: z.optional(
    z.string().min(4, {
      message: "Code must be at least 4 characters long",
    })
  ),
});
