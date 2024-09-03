// import Link from "next/link";

import { HydrateClient } from "~/trpc/server";
import Product from "./product/page";
import { env } from "~/env";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center md:flex-row">
        <Product />
      </main>
    </HydrateClient>
  );
}
