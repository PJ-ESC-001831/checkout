// import Link from "next/link";

import { api } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import { ProductDescription } from "../_components/product/description";
import { ImageCarousel } from "../_components/product/carousel";

export default async function Product() {
  const [product] = api.product.getById.useSuspenseQuery({
    uuid: "6f8f0b0a-d5c2-4f0b-8c2e-8d9e3b5f8f2a",
  });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center md:flex-row">
        {/* Left Half: Latest Post */}
        <ImageCarousel />

        {/* Right Half: Product Details */}
        <div className="flex w-full flex-col items-start justify-start gap-4 p-4 md:w-1/2">
          <h1 className="text-xl font-extrabold tracking-tight sm:text-[2rem]">
            Product Title
          </h1>
          <ProductDescription>
            {/* Assuming ProductDescription is a component that renders the product description */}
          </ProductDescription>
          <div className="variant-selector w-full">
            <label
              htmlFor="variant"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a variant:
            </label>
            <select
              id="variant"
              name="variant"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Variant 1</option>
              <option>Variant 2</option>
              <option>Variant 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            Checkout
          </button>
        </div>
      </main>
    </HydrateClient>
  );
}
