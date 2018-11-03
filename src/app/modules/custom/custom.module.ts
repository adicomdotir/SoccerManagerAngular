import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { NationalComponent } from './national/national.component';
import { PlayersComponent } from './players/players.component';
import { TacticComponent } from './tactic/tactic.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
        PlayerHistoryComponent,
        NationalComponent,
        PlayersComponent,
        TacticComponent
    ]
})
export class CustomModule { }
