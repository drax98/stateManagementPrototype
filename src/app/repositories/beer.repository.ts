import {Repository} from './repository';
import {Beer} from './beer';
import {Injectable} from '@angular/core';

@Injectable()
export class BeerRepository extends Repository<Beer> {

}
