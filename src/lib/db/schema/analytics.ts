import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  decimal,
  text,
  jsonb,
} from "drizzle-orm/pg-core";
import { campaigns, creatives } from "./campaigns";

export const impressions = pgTable("impressions", {
  id: uuid("id").defaultRandom().primaryKey(),
  campaignId: uuid("campaign_id")
    .notNull()
    .references(() => campaigns.id, { onDelete: "cascade" }),
  creativeId: uuid("creative_id")
    .notNull()
    .references(() => creatives.id, { onDelete: "cascade" }),
  userId: uuid("user_id"),
  ip: varchar("ip", { length: 45 }),
  userAgent: text("user_agent"),
  cost: decimal("cost", { precision: 10, scale: 6 }).notNull(),
  servedAt: timestamp("served_at").notNull().defaultNow(),
});

export const clicks = pgTable("clicks", {
  id: uuid("id").defaultRandom().primaryKey(),
  impressionId: uuid("impression_id")
    .notNull()
    .references(() => impressions.id, { onDelete: "cascade" }),
  cost: decimal("cost", { precision: 10, scale: 6 }).notNull(),
  clickedAt: timestamp("clicked_at").notNull().defaultNow(),
});

export const conversions = pgTable("conversions", {
  id: uuid("id").defaultRandom().primaryKey(),
  clickId: uuid("click_id")
    .notNull()
    .references(() => clicks.id, { onDelete: "cascade" }),
  revenue: decimal("revenue", { precision: 12, scale: 2 }).notNull(),
  convertedAt: timestamp("converted_at").notNull().defaultNow(),
  metadata: jsonb("metadata"),
});
