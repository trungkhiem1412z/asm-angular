export interface Product {
  id?: number;
  idCateProduct?: number | string;
  nameProduct: string;
  priceProduct: number;
  description: string;
  image_url?: string;
  category?: {
    nameCate: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
