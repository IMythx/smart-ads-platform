import type { AdType } from "@/features/campaigns/types";

export interface AdPlacement {
  id: string;
  slot: string;
  width: number;
  height: number;
  adType: AdType;
}

export interface AdServingRequest {
  placementId: string;
  userId?: string;
  context: Record<string, unknown>;
}

export interface AdServingResponse {
  adId: string;
  creativeUrl: string;
  targetUrl: string;
  trackingId: string;
}
