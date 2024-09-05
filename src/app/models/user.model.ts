export interface User {
  id: string;
  username: string;
  lastname: string;
  name: string;
  email: string;
  password: string;
  walletId: string;
  country?: string;
  province?: string;
  phone?: string;
  accountType?: string;
  accountNumber?: string;
}
