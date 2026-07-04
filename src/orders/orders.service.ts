import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetOrderFilterDto } from './dto/get-order-filter.dto';
import { Order } from './entities/order.entity';
import { v4 as uuidv4 } from 'uuid';
import ordersData from '../data/data';

@Injectable()
export class OrdersService {
  private orders: Order[] = ordersData;

  create(createOrderDto: CreateOrderDto): Order {
    const newOrder: Order = {
      id: uuidv4(),
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(filterDto: GetOrderFilterDto = {}): Order[] {
    const { clientId, paymentMethod } = filterDto;
    let orders = this.orders;

    if (clientId) {
      orders = orders.filter((order) => order.clientId === clientId);
    }

    if (paymentMethod) {
      orders = orders.filter((order) => order.paymentMethod === paymentMethod);
    }

    return orders;
  }

  findOne(id: string) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Order {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    if (updateOrderDto.amount != undefined)
      order.amount = updateOrderDto.amount;
    if (updateOrderDto.longitude != undefined)
      order.longitude = updateOrderDto.longitude;
    if (updateOrderDto.latitude != undefined)
      order.latitude = updateOrderDto.latitude;
    if (updateOrderDto.clientId != undefined)
      order.clientId = updateOrderDto.clientId;
    if (updateOrderDto.paymentMethod != undefined)
      order.paymentMethod = updateOrderDto.paymentMethod;

    return order;
  }

  remove(id: string): void {
    const index = this.orders.findIndex((order) => order.id === id);

    if (index === -1) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    this.orders.splice(index, 1);
  }
}
