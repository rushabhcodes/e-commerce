import { Code } from "lucide-react";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  Code: z.optional(
    z.string().min(6, {
      message: "Code must be at least 6 characters long",
    })
  ),
});
