import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PlayerHistoryComponent} from './player-history/player-history.component';
import { MainComponent } from './main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        PlayerHistoryComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
