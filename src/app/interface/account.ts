export interface Account {
  id?: number;
  fullName?: string | null;
  userName?: string;
  img_avt: string;
  password?: string;
  roleid: number | string;
  role?: {
    nameRole: string;
    name: string;
  };
  token?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Role {
  idRole?: number;
  nameRole: string;
  name: string;
}
