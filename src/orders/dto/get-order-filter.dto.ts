import { PaymentMethod } from '../entities/order.entity';
import { IsOptional, IsEnum, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetOrderFilterDto {
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  clientId?: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
