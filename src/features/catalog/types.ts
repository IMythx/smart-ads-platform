export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  advertiserId: string;
}
