import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRestaurantInput } from 'src/types/graphql';
// import fs from 'fs';
// import csv from 'fast-csv';
@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  recreate() {
    const fs = require('fs');
    const csv = require('fast-csv');
    const filePath = 'assets/restaurant.csv';
    const stream = fs.createReadStream(filePath);
    const rows = [];

    csv
      .parseStream(stream, { headers: true })
      .on('error', (error) => {
        throw error;
      })
      .on('data', (row) => {
        rows.push(row);
      })
      .on('end', async () => {
        for (const row of rows) {
          await this.prisma.restaurant.create({
            data: {
              category: row.category,
              name: row.name,
              latitude: row.latitude,
              longitude: row.longitude,
              address: row.address,
              phone: row.phone,
              price_range: row.price_range,
              website: row.website,
              yelp_url: row.yelp_url,
            },
          });
        }
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
