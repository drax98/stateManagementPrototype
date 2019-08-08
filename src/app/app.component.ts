import {Component, OnInit} from '@angular/core';
import {BeerBackend} from './repositories/beer-backend';
import {publish, tap} from 'rxjs/operators';
import {ConnectableObservable, Observable} from 'rxjs';
import {BeerService} from './repositories/beer.service';
import {Beer} from './repositories/beer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'state-management';
    private beers$: Observable<Beer[]>;

    constructor(private beerBackend: BeerBackend, private beerService: BeerService) {

    }


    ngOnInit(): void {
        const getPage = this.beerBackend.getPage(1).pipe(tap(data => this.beerService.insert(...data)), publish()) as ConnectableObservable<any>;
        getPage.connect();

        this.beers$ = this.beerService.getAll$();
    }


}
