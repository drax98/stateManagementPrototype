import {Repository} from './repository';
import {Entity, EntityId} from './entity';
import {Injectable} from '@angular/core';

export interface CartItem extends Entity{
    amount: number;
}
@Injectable()
export class CartStore extends Repository<CartItem> {

}
