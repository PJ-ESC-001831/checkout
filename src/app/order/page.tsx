import { auth } from "@clerk/nextjs/server";
import React from "react";
import { HydrateClient } from "~/trpc/server";

export default async function Order() {
  const user = auth();
  /**
   * {
  user: {
    actor: undefined,
    sessionClaims: {
      exp: 1725971708,
      iat: 1725971648,
      iss: 'https://moving-lynx-47.clerk.accounts.dev',
      nbf: 1725971638,
      sid: 'sess_XXXX0',
      sub: 'user_XXXX0'
    },
    sessionId: 'sess_XXXX0',
    userId: 'user_XXXXX0',
    orgId: undefined,
    orgRole: undefined,
    orgSlug: undefined,
    orgPermissions: undefined,
    getToken: [AsyncFunction (anonymous)],
    has: [Function (anonymous)],
    debug: [Function (anonymous)],
    protect: [Function (anonymous)],
    redirectToSignIn: [Function: redirectToSignIn]
  }
}
   */
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
