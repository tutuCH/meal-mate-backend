
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
    category: string;
    name: string;
    latitude: number;
    longitude: number;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    price_range?: Nullable<string>;
    website?: Nullable<string>;
    yelp_url?: Nullable<string>;
}

export class Coordinates {
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
}

export class GoogleMapApiResponse {
    business_status?: Nullable<string>;
    geometry?: Nullable<Geometry>;
    icon?: Nullable<string>;
    icon_background_color?: Nullable<string>;
    icon_mask_base_uri?: Nullable<string>;
    name?: Nullable<string>;
    opening_hours?: Nullable<OpeningHours>;
    photos?: Nullable<Nullable<Photo>[]>;
    place_id?: Nullable<string>;
    plus_code?: Nullable<PlusCode>;
    price_level?: Nullable<number>;
    rating?: Nullable<number>;
    reference?: Nullable<string>;
    scope?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
    user_ratings_total?: Nullable<number>;
    vicinity?: Nullable<string>;
}

export class Geometry {
    location?: Nullable<Location>;
    viewport?: Nullable<Viewport>;
}

export class Location {
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export class Viewport {
    northeast?: Nullable<Location>;
    southwest?: Nullable<Location>;
}

export class OpeningHours {
    open_now?: Nullable<boolean>;
}

export class Photo {
    height?: Nullable<number>;
    html_attributions?: Nullable<Nullable<string>[]>;
    photo_reference?: Nullable<string>;
    width?: Nullable<number>;
}

export class PlusCode {
    compound_code?: Nullable<string>;
    global_code?: Nullable<string>;
}

export abstract class IQuery {
    abstract nearbyRestaurants(latitude: number, longitude: number): Nullable<Nullable<GoogleMapApiResponse>[]> | Promise<Nullable<Nullable<GoogleMapApiResponse>[]>>;

    abstract restaurants(): Nullable<Restaurant>[] | Promise<Nullable<Restaurant>[]>;

    abstract restaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

export abstract class IMutation {
    abstract recreateRestaurant(): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

    abstract updateRestaurant(updateRestaurantInput: UpdateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract removeRestaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;
}

type Nullable<T> = T | null;
