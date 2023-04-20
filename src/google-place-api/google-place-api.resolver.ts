import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GooglePlaceApiService } from './google-place-api.service';

@Resolver('GooglePlaceApi')
export class GooglePlaceApiResolver {
  constructor(private readonly googlePlaceApiService: GooglePlaceApiService) {}

  @Query('nearbyRestaurants')
  async getNearbyRestaurants(
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number,
  ) {
    return await this.googlePlaceApiService.getNearbyRestaurants(
      latitude,
      longitude,
    );
  }
}
