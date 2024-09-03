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
      <h1 className="truncate text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="my-8 text-justify text-sm text-gray-600">{description}</p>
    </div>
  );
}
