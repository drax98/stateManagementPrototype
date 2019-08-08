import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Beer} from './beer';

@Injectable()
export class BeerBackend {

    constructor(private httpClient: HttpClient) {
    }


    getPage(page: number) {
        return this.httpClient.get<Beer[]>('https://api.punkapi.com/v2/beers?page=1');
    }
}
