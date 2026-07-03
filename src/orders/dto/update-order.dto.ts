import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '../entities/order.entity';
import { IsOptional, IsNumber, Min, IsEnum } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({
    description: 'Updated client ID',
    type: Number,
    example: 1002,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  clientId?: number;

  @ApiProperty({
    description: 'Updated payment method',
    enum: PaymentMethod,
    example: PaymentMethod.cash,
    required: false,
  })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
