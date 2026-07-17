export type Role = "admin" | "advertiser";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
}
