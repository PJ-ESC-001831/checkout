"use client";

import { api } from "~/trpc/react";

export function ProductDescription({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-xs">
      <h1 className="truncate">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
