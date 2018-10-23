import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';

@NgModule({
    imports: [
        CommonModule,
        CustomRoutingModule
    ],
    declarations: [HomeComponent, InitComponent]
})
export class CustomModule { }
