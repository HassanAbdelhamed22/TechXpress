import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum PaymentMethod {
  cash = 'cash',
  visa = 'visa',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @ApiProperty()
  amount!: number;

  @Column({ type: 'double precision' })
  @ApiProperty()
  longitude!: number;

  @Column({ type: 'double precision' })
  @ApiProperty()
  latitude!: number;

  @Column({ type: 'integer' })
  @ApiProperty()
  clientId!: number;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.cash,
  })
  @ApiProperty()
  paymentMethod!: PaymentMethod;
}

