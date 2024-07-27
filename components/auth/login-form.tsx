"use client";

import { Button } from "../ui/button";
import { AuthCard } from "./auth-card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/login-schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { Input } from "../ui/input";
import Link from "next/link";

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };
  return (
    <AuthCard
      cardTitle={"Welcome Back"}
      backButtonHref={"/auth/register"}
      backButtonLabel={"Create new account"}
      showSocials={true}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={(field) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="rushabhpatil557@gmail.com" type="email" autoComplete="email"/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={(field) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="MySuperSecretPassword" type="password" autoComplete="current-password"/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"ghost"}><Link href={""}>Forgot your password?</Link> </Button>
          <Button>SignIn</Button>             
        </form>
      </Form>
    </AuthCard>
  );
};
