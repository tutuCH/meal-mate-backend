
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateRestaurantInput {
    name: string;
}

export class UpdateRestaurantInput {
    id: number;
    name: string;
}

export class Restaurant {
    id: number;
    name: string;
}

export abstract class IQuery {
    abstract restaurants(): Nullable<Restaurant>[] | Promise<Nullable<Restaurant>[]>;

    abstract restaurant(id: number): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

export abstract class IMutation {
    abstract createRestaurant(createRestaurantInput: CreateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract updateRestaurant(updateRestaurantInput: UpdateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract removeRestaurant(id: number): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

type Nullable<T> = T | null;
