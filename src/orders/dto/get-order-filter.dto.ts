import { PaymentMethod } from '../entities/order.entity';
import { IsOptional, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetOrderFilterDto {
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  clientId?: number;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
