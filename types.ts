export interface Bookshop {
  id: string;
  name: string;
  neighborhood: string;
  description: string;
  tags: string[];
  imageUrl: string;
  address: string;
  hours: string;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ViewMode {
  GRID = 'GRID',
  DETAIL = 'DETAIL'
}