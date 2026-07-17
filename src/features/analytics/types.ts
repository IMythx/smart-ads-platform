export interface Impression {
  id: string;
  adId: string;
  timestamp: Date;
  userId?: string;
  ip?: string;
  cost: number;
}

export interface Click {
  id: string;
  impressionId: string;
  timestamp: Date;
  cost: number;
}

export interface Conversion {
  id: string;
  clickId: string;
  timestamp: Date;
  revenue: number;
}

export interface CampaignStats {
  campaignId: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  revenue: number;
  ctr: number;
  cpc: number;
  roas: number;
}
