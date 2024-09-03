"use client";

import { useState } from "react";

export function ProductForm({
  label = "Choose a variant",
  variants = [],
  className,
}: {
  label?: string;
  variants?: string[];
  className?: string;
}) {
  const [variant, setVariant] = useState<string>("");

  // There are no variants to choose from for this product
  if (variants.length === 0) {
    return;
  }

  return (
    <div className={`${className} variant-selector w-full`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Selected variant: ${variant}`);
        }}
      >
        <label
          htmlFor="variant"
          className="block text-sm font-semibold text-gray-800"
        >
          {`${label}:`}
        </label>
        <select
          id="variant"
          name="variant"
          onChange={(e) => setVariant(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue=""
        >
          <option value="" disabled className="text-gray-500">
            Click to choose an option
          </option>
          {variants.map((variant) => (
            <option key={variant}>{variant}</option>
          ))}
        </select>
        <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Checkout
        </button>
      </form>
    </div>
  );
}
