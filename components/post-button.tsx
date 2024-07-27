"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function PostButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Submit
    </Button>
  );
}
