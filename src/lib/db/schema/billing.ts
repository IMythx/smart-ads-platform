import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  decimal,
  text,
  jsonb,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const transactions = pgTable("transactions", {
  id: uuid("id").defaultRandom().primaryKey(),
  advertiserId: text("advertiser_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 3 }).notNull().default("USD"),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  type: varchar("type", { length: 20 }).notNull(),
  description: text("description"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const invoices = pgTable("invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  advertiserId: text("advertiser_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 3 }).notNull().default("USD"),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  dueDate: timestamp("due_date").notNull(),
  lineItems: jsonb("line_items").notNull().default("[]"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
