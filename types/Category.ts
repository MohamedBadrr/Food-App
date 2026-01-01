export interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}