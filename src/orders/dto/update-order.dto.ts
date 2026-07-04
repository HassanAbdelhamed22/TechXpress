import { PaymentMethod } from '../entities/order.entity';
import { IsOptional, IsNumber, Min, IsEnum } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  clientId?: number;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
