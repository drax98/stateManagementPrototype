import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CartItem, CartStore} from './cart.store';
import {BeerRepository} from './beer.repository';
import {mergeMap} from 'rxjs/operators';
import {Beer} from './beer';

@Injectable()
export class CartService {
    constructor(private cartStore: CartStore, private beerRepository: BeerRepository) {
    }

    getAll$(): Observable<any> {
        return this.cartStore.getAll$().pipe(
            mergeMap((cartItems: CartItem[]) => cartItems.map(item => this.beerRepository.getOne$(item.id)))
        );
    }

    insert(beer: Beer) {
        this.cartStore.insert({id: beer.id, amount: 1});
    }
}
