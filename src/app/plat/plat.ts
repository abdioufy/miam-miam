import { IAdresse } from '../adresse';
import { IGeopoint } from '../geopoint';
import { Url } from 'url';
import { ITag } from './tag';
import { IRestaurant } from '../restaurant/restaurant';

export interface IPlat {
    objectID: string;
    nom: string;
    description: string;
    prix: number;
    chef?: string;
    jours: string[];
    photos: string[];
    tags: ITag;
    restaurant: IRestaurant; // to replace IRestaurantPlat

}
