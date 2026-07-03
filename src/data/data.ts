import { v4 as uuidv4 } from 'uuid';
import { Order, PaymentMethod } from '../orders/entities/order.entity';

const orders: Order[] = [
  {
    id: uuidv4(),
    amount: 100,
    longitude: 10,
    latitude: 20,
    clientId: 1,
    paymentMethod: PaymentMethod.cash,
  },
  {
    id: uuidv4(),
    amount: 150,
    longitude: 20,
    latitude: 30,
    clientId: 2,
    paymentMethod: PaymentMethod.visa,
  },
  {
    id: uuidv4(),
    amount: 200,
    longitude: 20,
    latitude: 30,
    clientId: 1,
    paymentMethod: PaymentMethod.visa,
  },
  {
    id: uuidv4(),
    amount: 250,
    longitude: 20,
    latitude: 30,
    clientId: 2,
    paymentMethod: PaymentMethod.cash,
  },
];

export default orders;
