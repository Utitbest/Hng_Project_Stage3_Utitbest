import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async ({ db }, { slug }) => {
    return await db.query("products").filter(q => q.eq(q.field("slug"), slug)).first();
  },
});

export const getAll = query(async ({ db }) => {
  return await db.query("products").collect();
});

export const deleteAll = mutation(async ({ db }) => {
  const products = await db.query("products").collect();
  for (const product of products) {
    await db.delete(product._id);
  }
  return `${products.length} products deleted`;
});
