
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateRestaurantInput {
    name: string;
    latitude: number;
    longitude: number;
    address?: Nullable<string>;
    phone?: Nullable<string>;
}

export class UpdateRestaurantInput {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    address?: Nullable<string>;
    phone?: Nullable<string>;
}

export class QueryNearbyRestaurantInput {
    latitude: number;
    longitude: number;
}

export interface Restaurant {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    address?: Nullable<string>;
    phone?: Nullable<string>;
}

export class Coordinates {
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
}

export abstract class IQuery {
    abstract nearbyRestaurants(latitude: number, longitude: number): Nullable<string> | Promise<Nullable<string>>;

    abstract restaurants(): Nullable<Restaurant>[] | Promise<Nullable<Restaurant>[]>;

    abstract restaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

export abstract class IMutation {
    abstract createRestaurant(createRestaurantInput: CreateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract updateRestaurant(updateRestaurantInput: UpdateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract removeRestaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

type Nullable<T> = T | null;
