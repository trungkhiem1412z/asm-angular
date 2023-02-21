export interface Category {
  idCate?: number;
  nameCate: string;
  urlCate: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdatedCategory {
  nameCate: string;
  urlCate: string;
}
