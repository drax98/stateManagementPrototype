import {Entity, EntityId} from './entity';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class Repository<Item extends Entity> {
    private state$ = new Subject<Item[]>();

    getAll$() {
        return this.state$.asObservable();
    }

    getOne$(id: EntityId) {
        return this.state$.asObservable().pipe(map(items => items.find(item => item.id === id)));
    }

    insert(...item: Item[]) {
        return this.state$.next(item);
    }
}
