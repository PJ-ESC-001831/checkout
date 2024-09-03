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
        title: "The box",
        description: `The Box" is an innovative, all-in-one smart home hub designed to seamlessly integrate and control various
          smart devices within your household. With its sleek, minimalist design, The Box not only enhances the aesthetic appeal
          of any room but also serves as the central command centre for your smart home ecosystem. Equipped with advanced AI technology,
          it learns your preferences and routines, offering personalised automation and control over lighting, climate, security
          systems, and entertainment devices. The Box supports voice commands and is compatible with major smart home platforms
          such as Alexa, Google Home, and Apple HomeKit, ensuring a smooth and user-friendly experience.`,
        price: 10,
        uuid: input.uuid,
      };
    }),
  getImages: publicProcedure
    .input(z.object({ uuid: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return [
        "/assets/images/carousel-1.svg",
        "/assets/images/carousel-2.svg",
        "/assets/images/carousel-3.svg",
      ];
    }),
});
