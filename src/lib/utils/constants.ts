export const APP_NAME = "Smart Ads Platform";

export const ROLES = ["admin", "advertiser"] as const;
export type Role = (typeof ROLES)[number];

export const CAMPAIGN_STATUSES = ["draft", "active", "paused", "ended"] as const;
export type CampaignStatus = (typeof CAMPAIGN_STATUSES)[number];

export const AD_TYPES = ["banner", "native", "video", "carousel"] as const;
export type AdType = (typeof AD_TYPES)[number];

export const CURRENCY = "USD";
