"use client";
import { Session } from "next-auth";
import Image from "next/image";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";


export const UserButton = ({ user }: Session) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <Image  alt={"User Profile"} width={50} height={50} src={user?.image as string}></Image>
        <Button onClick={()=> signOut()}>Sign Out</Button>
      </div>
    </>
  );
};
