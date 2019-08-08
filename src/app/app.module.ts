import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerRepository} from './repositories/beer.repository';
import {CartStore} from './repositories/cart.store';
import {CartService} from './repositories/cart.service';
import {BeerBackend} from './repositories/beer-backend';
import {BeerStore} from './repositories/beer.store';
import {BeerService} from './repositories/beer.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [BeerRepository, CartStore, CartService, BeerBackend, BeerStore, BeerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
