// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { HydrateClient } from "~/trpc/server";
import { CheckoutProduct } from "./_components/product";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <p className="text-small tracking-tight sm:text-[1rem]">
            Just testing for now, but this is where the images will come.
          </p>
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-xl font-extrabold tracking-tight sm:text-[2rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <CheckoutProduct />
        </div>
      </main>
    </HydrateClient>
  );
}
