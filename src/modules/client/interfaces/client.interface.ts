export interface IClient {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  about: string | null;
  email: string | null;
  phone: string | null;
}
