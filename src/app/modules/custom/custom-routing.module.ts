import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';
import { TableComponent } from './table/table.component';
import { FixtureComponent } from './fixture/fixture.component';
import { PlayerComponent } from './player/player.component';
import { ScoreComponent } from './score/score.component';
import { TeamComponent } from './team/team.component';
import { TopscorerComponent } from './topscorer/topscorer.component';

const routes: Routes = [
    {
        path: '', component: InitComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'table', component: TableComponent
    },
    {
        path: 'fixture', component: FixtureComponent
    },
    {
        path: 'score', component: ScoreComponent
    },
    {
        path: 'player', component: PlayerComponent
    },
    {
        path: 'team', component: TeamComponent
    },
    {
        path: 'topscorer', component: TopscorerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomRoutingModule { }
