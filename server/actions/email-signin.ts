"use server";

import { LoginSchema } from "@/schema/login-schema";
import { createSafeActionClient } from "next-safe-action";

const action = createSafeActionClient();

export const emailSignIn = action.schema(LoginSchema).action(async ({parsedInput}) => {
    console.log(parsedInput.email, parsedInput.password,parsedInput.code);
    return {success: true}; 
});
