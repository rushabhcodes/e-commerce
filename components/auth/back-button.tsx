"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
  backButtonHref: string;
  backButtonLabel: string;
};

export default function BackButton({
  backButtonHref,
  backButtonLabel,
}: BackButtonProps) {
  return (
    <Button asChild variant={"link"} className="font-medium w-full">
      <Link href={backButtonHref} aria-label={backButtonLabel}>
        {backButtonLabel}
      </Link>
    </Button>
  );    
}
