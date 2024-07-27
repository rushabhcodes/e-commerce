"use client";

import { use, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <main className=" text-xl flex items-center justify-center">
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
