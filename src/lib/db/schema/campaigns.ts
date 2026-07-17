import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
  decimal,
  date,
  boolean,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const campaigns = pgTable("campaigns", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("draft"),
  budget: decimal("budget", { precision: 12, scale: 2 }).notNull(),
  spent: decimal("spent", { precision: 12, scale: 2 }).notNull().default("0"),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  dailyBudget: decimal("daily_budget", { precision: 12, scale: 2 }),
  advertiserId: uuid("advertiser_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const adGroups = pgTable("ad_groups", {
  id: uuid("id").defaultRandom().primaryKey(),
  campaignId: uuid("campaign_id")
    .notNull()
    .references(() => campaigns.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  adType: varchar("ad_type", { length: 20 }).notNull(),
  bid: decimal("bid", { precision: 10, scale: 4 }).notNull(),
  targetUrl: text("target_url").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const creatives = pgTable("creatives", {
  id: uuid("id").defaultRandom().primaryKey(),
  adGroupId: uuid("ad_group_id")
    .notNull()
    .references(() => adGroups.id, { onDelete: "cascade" }),
  headline: varchar("headline", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  destinationUrl: text("destination_url").notNull(),
  width: integer("width"),
  height: integer("height"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
