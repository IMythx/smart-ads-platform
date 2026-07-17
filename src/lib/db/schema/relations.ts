import { relations } from "drizzle-orm";
import { users } from "./users";
import { campaigns, adGroups, creatives } from "./campaigns";
import { impressions, clicks, conversions } from "./analytics";
import { products } from "./catalog";
import { transactions, invoices } from "./billing";

export const usersRelations = relations(users, ({ many }) => ({
  campaigns: many(campaigns),
  products: many(products),
  transactions: many(transactions),
  invoices: many(invoices),
}));

export const campaignsRelations = relations(campaigns, ({ one, many }) => ({
  advertiser: one(users, {
    fields: [campaigns.advertiserId],
    references: [users.id],
  }),
  adGroups: many(adGroups),
  impressions: many(impressions),
}));

export const adGroupsRelations = relations(adGroups, ({ one, many }) => ({
  campaign: one(campaigns, {
    fields: [adGroups.campaignId],
    references: [campaigns.id],
  }),
  creatives: many(creatives),
}));

export const creativesRelations = relations(creatives, ({ one, many }) => ({
  adGroup: one(adGroups, {
    fields: [creatives.adGroupId],
    references: [adGroups.id],
  }),
  impressions: many(impressions),
}));

export const impressionsRelations = relations(impressions, ({ one, many }) => ({
  campaign: one(campaigns, {
    fields: [impressions.campaignId],
    references: [campaigns.id],
  }),
  creative: one(creatives, {
    fields: [impressions.creativeId],
    references: [creatives.id],
  }),
  clicks: many(clicks),
}));

export const clicksRelations = relations(clicks, ({ one, many }) => ({
  impression: one(impressions, {
    fields: [clicks.impressionId],
    references: [impressions.id],
  }),
  conversions: many(conversions),
}));

export const conversionsRelations = relations(conversions, ({ one }) => ({
  click: one(clicks, {
    fields: [conversions.clickId],
    references: [clicks.id],
  }),
}));

export const productsRelations = relations(products, ({ one }) => ({
  advertiser: one(users, {
    fields: [products.advertiserId],
    references: [users.id],
  }),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  advertiser: one(users, {
    fields: [transactions.advertiserId],
    references: [users.id],
  }),
}));

export const invoicesRelations = relations(invoices, ({ one }) => ({
  advertiser: one(users, {
    fields: [invoices.advertiserId],
    references: [users.id],
  }),
}));
