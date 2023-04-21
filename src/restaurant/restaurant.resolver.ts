import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { UpdateRestaurantInput } from 'src/types/graphql';

@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query('restaurants')
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query('restaurant')
  findOne(@Args('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Mutation('recreateRestaurant')
  recreate() {
    return this.restaurantService.recreate();
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
  remove(@Args('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
