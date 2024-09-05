export interface Wallet {
  id: string;
  userId: string;
  coins: Coin[];
}

export interface Coin {
  id: string;
  name: string;
  hedgeFundInvestment: number;
  bonificat: number;
  hedgeProtectionInsurance: number;
  optQuantity: number;
  strikePrice: number;
  expirationDate: string;
  earnings: number;
}
