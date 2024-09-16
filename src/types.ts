// src/types.ts
export interface User {
  name: string;
}

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
  user: User;
  likes: number;
  description?: string;
}
