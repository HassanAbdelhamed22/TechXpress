import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository, DeleteResult, FindOptionsWhere } from 'typeorm';
import { Order } from './entities/order.entity';
import { GetOrderFilterDto } from './dto/get-order-filter.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderRepository {
  private repo: Repository<Order>;

  constructor(private readonly dataSource: DataSource) {
    this.repo = dataSource.getRepository(Order);
  }

  create(createOrderDto: CreateOrderDto): Order {
    return this.repo.create(createOrderDto);
  }

  async save(order: Order): Promise<Order> {
    return await this.repo.save(order);
  }

  async findOneBy(where: FindOptionsWhere<Order>): Promise<Order | null> {
    return await this.repo.findOneBy(where);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.repo.save({ ...order, ...updateOrderDto });
  }

  async findOrders(filterDto: GetOrderFilterDto): Promise<Order[]> {
    const { clientId, paymentMethod } = filterDto;
    const query = this.repo.createQueryBuilder('order');

    if (clientId) {
      query.andWhere('order.clientId = :clientId', { clientId });
    }

    if (paymentMethod) {
      query.andWhere('order.paymentMethod = :paymentMethod', { paymentMethod });
    }

    return await query.getMany();
  }
}
