import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateRestaurantInput,
  UpdateRestaurantInput,
} from 'src/types/graphql';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  create({ name, latitude, longitude, address, phone }: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: {
        name,
        latitude,
        longitude,
        address,
        phone,
      },
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany();
  }

  findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      select: {
        name: true,
        id: true,
        phone: true,
        latitude: true,
        longitude: true,
        address: true,
      },
      where: { id },
    });
  }

  update(id: string, { name }: UpdateRestaurantInput) {
    return this.prisma.restaurant.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.restaurant.delete({
      where: { id },
    });
  }
}
