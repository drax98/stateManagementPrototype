import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {CartItem, CartStore} from './cart.store';
import {BeerRepository} from './beer.repository';
import {map, mergeMap} from 'rxjs/operators';
import {Beer} from './beer';
import {BeerItem, BeerStore} from './beer.store';

@Injectable()
export class BeerService {
    constructor(private beerStore: BeerStore, private beerRepository: BeerRepository) {
    }

    getAll$(): Observable<Beer[]> {
        return combineLatest(this.beerStore.getAll$(), this.beerRepository.getAll$()).pipe(map(([storeItems, repoItems]) =>
            repoItems.filter(item => storeItems.map(storeItem => storeItem.id).includes(item.id))
        ));
    }

    insert(...beer: Beer[]) {
        this.beerRepository.insert(...beer);
        this.beerStore.insert(...beer.map(b => {
            return {id: b.id, displayed: false};
        }));
    }
}
