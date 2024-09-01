// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { CheckoutProduct } from "./_components/product";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <p className="text-lg text-center">
            Get started by editing{" "}
            <code className="bg-gray-800 p-2 rounded-md text-sm font-mono">
              apps/checkout/src/app/page.tsx
            </code>
          </p>
          <CheckoutProduct />
        </div>
      </main>
    </HydrateClient>
  );
}
