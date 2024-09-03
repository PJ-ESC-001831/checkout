import React from "react";
import { HydrateClient } from "~/trpc/server";

export default async function Order() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center">
          {/* Congratulations Message */}
          <h1 className="mb-4 text-4xl font-bold">🎉 CONGRATULATIONS! 🎉</h1>

          {/* Order Completion Text */}
          <p className="mb-2 text-lg">Your order is complete!</p>
          <p className="text-md">
            Thank you for your purchase. We hope you enjoy your product. An
            email confirmation has been sent to you.
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
