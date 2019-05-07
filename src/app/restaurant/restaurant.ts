import { IAdresse } from '../adresse';
import { IGeopoint } from '../geopoint';
import { IPaiement } from '../paiement';

export interface IRestaurant {
    objectID: string;
    nom: string;
    adresse: IAdresse;
    geopoints: IGeopoint;
    paiements: IPaiement;
}
