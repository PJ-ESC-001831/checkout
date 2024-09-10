import { auth } from "@clerk/nextjs/server";
import React from "react";
import { HydrateClient } from "~/trpc/server";

export default async function Order() {
  const user = auth();
  console.log({ user });
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center">
          {/* Congratulations Message */}
          <h1 className="mb-4 text-4xl font-bold">REDIRECTING TO CHECKOUT!</h1>
        </div>
      </main>
    </HydrateClient>
  );
}
