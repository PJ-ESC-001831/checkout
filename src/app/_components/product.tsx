"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function CheckoutProduct() {
  const [product] = api.product.getById.useSuspenseQuery({ uuid: '6f8f0b0a-d5c2-4f0b-8c2e-8d9e3b5f8f2a'});

  const utils = api.useUtils();
  const [name, setName] = useState("");
  // const createPost = api.post.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.post.invalidate();
  //     setName("");
  //   },
  // });

  return (
    <div className="w-full max-w-xs">
      {product ? (
        <p className="truncate">The product you are looking for is: {product.title}</p>
      ) : (
        <p>We could not find the product you were looking for.</p>
      )}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form> */}
    </div>
  );
}
