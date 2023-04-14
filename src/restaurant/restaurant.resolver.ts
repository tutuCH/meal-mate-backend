import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantInput,
  UpdateRestaurantInput,
} from 'src/types/graphql';

@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation('createRestaurant')
  create(
    @Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput,
  ) {
    return this.restaurantService.create(createRestaurantInput);
  }

  @Query('restaurants')
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query('restaurant')
  findOne(@Args('id') id: number) {
    return this.restaurantService.findOne(id);
  }

  @Mutation('updateRestaurant')
  update(
    @Args('updateRestaurantInput') updateRestaurantInput: UpdateRestaurantInput,
  ) {
    return this.restaurantService.update(
      updateRestaurantInput.id,
      updateRestaurantInput,
    );
  }

  @Mutation('removeRestaurant')
  remove(@Args('id') id: number) {
    return this.restaurantService.remove(id);
  }
}
