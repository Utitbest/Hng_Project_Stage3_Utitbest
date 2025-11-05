import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    slug: v.string(),
    name: v.string(),
    nickname: v.optional(v.string()),
    description: v.string(),
    price: v.number(),
    features: v.string(),
    box: v.array(v.string()),
    image: v.string(),
    gallery: v.array(v.string()),
    related: v.array(
      v.object({
        name: v.string(),
        slug: v.string(),
        image: v.string(),
      })
    ),
  }),
});
