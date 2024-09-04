// import Link from "next/link";

import { HydrateClient } from "~/trpc/server";
import Product from "./product/page";

export default async function Home() {
  return (
    <HydrateClient>
      <header className="flex w-full items-center justify-between p-4 text-white">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="mr-2 h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">co-maker</span>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center md:flex-row">
        <Product />
      </main>
    </HydrateClient>
  );
}
