export type CampaignStatus = "draft" | "active" | "paused" | "ended";
export type AdType = "banner" | "native" | "video" | "carousel";

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  startDate: Date;
  endDate?: Date;
  advertiserId: string;
  createdAt: Date;
}

export interface AdGroup {
  id: string;
  campaignId: string;
  name: string;
  adType: AdType;
  bid: number;
  targetUrl: string;
}
