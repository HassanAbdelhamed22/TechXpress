import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsPositive, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;

  @IsNumber()
  @IsPositive()
  clientId: number;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
