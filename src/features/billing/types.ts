export type TransactionStatus = "pending" | "completed" | "failed" | "refunded";

export interface Transaction {
  id: string;
  advertiserId: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  description: string;
  createdAt: Date;
}

export interface Invoice {
  id: string;
  advertiserId: string;
  amount: number;
  dueDate: Date;
  status: "pending" | "paid" | "overdue";
  lineItems: Array<{
    description: string;
    amount: number;
  }>;
}
