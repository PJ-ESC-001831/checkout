"use client";

export function ProductForm({
  label = "Choose a variant",
  variants = [],
  className,
}: {
  label?: string;
  variants?: string[];
  className?: string;
}) {
  // There are no variants to choose from for this product
  if (variants.length === 0) {
    return;
  }

  return (
    <div className={`${className} variant-selector w-full`}>
      <label
        htmlFor="variant"
        className="block text-sm font-medium text-gray-700"
      >
        {`${label}:`}
      </label>
      <select
        id="variant"
        name="variant"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {variants.map((variant) => (
          <option key={variant}>{variant}</option>
        ))}
      </select>
    </div>
  );
}
