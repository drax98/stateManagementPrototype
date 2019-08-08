import {Entity, EntityId} from './entity';

export class Beer implements Entity {
    id: EntityId;
    name: string;
    tagline: string;
}
