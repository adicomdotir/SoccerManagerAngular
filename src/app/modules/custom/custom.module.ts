import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CustomRoutingModule} from './custom-routing.module';
import {InitComponent} from './init/init.component';
import {GameComponent} from './game.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomRoutingModule
    ],
    declarations: [
        InitComponent,
        GameComponent
    ]
})
export class CustomModule {
}
