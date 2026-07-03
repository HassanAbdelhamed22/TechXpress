import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsPositive, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  amount!: number;

  @ApiProperty()
  @IsNumber()
  longitude!: number;

  @ApiProperty()
  @IsNumber()
  latitude!: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  clientId!: number;

  @ApiProperty()
  @IsEnum(PaymentMethod)
  paymentMethod!: PaymentMethod;
}
