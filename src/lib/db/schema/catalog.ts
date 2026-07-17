import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  decimal,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  advertiserId: text("advertiser_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  price: decimal("price", { precision: 12, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 3 }).notNull().default("USD"),
  category: varchar("category", { length: 100 }),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
