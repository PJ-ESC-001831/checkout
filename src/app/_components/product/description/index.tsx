"use client";

export function ProductDescription({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`${className} w-full bg-white`}>
      <h1 className="truncate text-lg font-semibold text-gray-800">{title}</h1>
      <p className="mt-2 text-justify text-sm text-gray-600">{description}</p>
    </div>
  );
}
