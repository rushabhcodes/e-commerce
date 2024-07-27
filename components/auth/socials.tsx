"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Button
        className="flex gap-4 w-full"
        variant={"secondary"}
        onClick={() => {
          signIn("google", {
            redirect: false,
            callbackUrl: "/",
          });
        }}
      >
        SignIn with Google
        <FaGoogle/>
      </Button>
      <Button
        className="flex gap-4 w-full"
        variant={"secondary"}
        onClick={() => {
          signIn("github", {
            redirect: false,
            callbackUrl: "/",
          });
        }}
      >
        SignIn with GitHub
        <FaGithub/>
      </Button>
    </div>
  );
}
