import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';
import { TableComponent } from './table/table.component';
import { FixtureComponent } from './fixture/fixture.component';
import { ScoreComponent } from './score/score.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TopscorerComponent } from './topscorer/topscorer.component';
import { PlayerHistoryComponent } from './playerhistory/playerhistory.component';

@NgModule({
    imports: [
        CommonModule,
        CustomRoutingModule
    ],
    declarations: [
        HomeComponent, 
        InitComponent,
        TableComponent,
        FixtureComponent,
        ScoreComponent,
        PlayerComponent,
        TeamComponent,
        TopscorerComponent,
        PlayerHistoryComponent
    ]
})
export class CustomModule { }
