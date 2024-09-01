import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  // Procedure to get product details by UUID
  getById: publicProcedure
    .input(z.object({ uuid: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        id: 1,
        title: "box",
        description: "A box",
        price: 10,
        uuid: input.uuid,
      };
    }),
});
