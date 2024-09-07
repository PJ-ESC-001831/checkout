import { api, HydrateClient } from "~/trpc/server";
import { ProductDescription } from "../_components/product/description";
import { ProductForm } from "../_components/product/form";

export default async function Product() {
  const uuid = "6f8f0b0a-d5c2-4f0b-8c2e-8d9e3b5f8f2a";

  const product = await api.product.getById({
    uuid,
  });

  const images = await api.product.getImages({ uuid });

  return (
    <HydrateClient>
      <main className="items-top flex min-h-screen flex-col justify-center p-6 md:flex-row md:p-12">
        {/* Left Half: Latest Post */}
        <div className="h-full w-full flex-col p-4 md:w-1/2">
          <img src={images[0]} />
        </div>

        {/* Right Half: Product Details */}
        <div className="w-full flex-col p-4 md:w-1/2">
          <ProductDescription
            description={product?.description ?? "Loading..."}
            title={product?.title ?? "Loading..."}
          />
          <ProductForm variants={product.variants} />
        </div>
      </main>
    </HydrateClient>
  );
}
