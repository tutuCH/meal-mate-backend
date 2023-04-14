import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateRestaurantInput,
  UpdateRestaurantInput,
} from 'src/types/graphql';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany();
  }

  findOne(id: number) {
    return this.prisma.restaurant.findUnique({
      select: { name: true, id: true },
      where: { id },
    });
  }

  update(id: number, { name }: UpdateRestaurantInput) {
    return this.prisma.restaurant.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.restaurant.delete({
      where: { id },
    });
  }
}
