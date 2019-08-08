import {Repository} from './repository';
import {Entity, EntityId} from './entity';
import {BeerRepository} from './beer.repository';
import {Injectable} from '@angular/core';

export interface BeerItem extends Entity {
    displayed: boolean;
}

@Injectable()
export class BeerStore extends Repository<BeerItem> {
}
