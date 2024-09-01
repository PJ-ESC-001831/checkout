// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { HydrateClient } from "~/trpc/server";
import { ProductDescription } from "./_components/product/description";

export default async function Home() {  
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col md:flex-row items-center justify-center">
        <Prod
      </main>
    </HydrateClient>
  );
}
