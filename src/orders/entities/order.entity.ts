export class Order {
  id: string;
  amount: number;
  longitude: number;
  latitude: number;
  clientId: number;
  paymentMethod: PaymentMethod;
}

export enum PaymentMethod {
  cash = 'cash',
  visa = 'visa',
}
