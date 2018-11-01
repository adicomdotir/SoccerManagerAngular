import { Injectable } from '@angular/core';
import { Player } from '../../shared/model/player';
import { firstName, lastName, countries } from '../../config/localdata';

@Injectable()
export class GeneratorService {

    constructor() { }

    createPlayer(id, teamId): Player {
        const pl = new Player();
        pl.id = id;
        
        pl.national = countries[Math.floor(Math.random() * countries.length)];
        const fn = Math.floor(Math.random() * firstName[pl.national].length);
        const ln = Math.floor(Math.random() * lastName[pl.national].length);
        pl.name = firstName[pl.national][fn] + ' ' + lastName[pl.national][ln];

        pl.age = Math.floor(Math.random() * 18) + 18;
        pl.attack = Math.floor(Math.random() * 20) + 1;
        pl.defend = Math.floor(Math.random() * 20) + 1;
        pl.goalkeeper = Math.floor(Math.random() * 20) + 1;
        pl.finish = Math.floor(Math.random() * 20) + 1;
        pl.morale = 4;
        pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish;
        pl.teamId = teamId;
        pl.number = Math.floor(Math.random() * 99) + 1;
        pl.price = pl.overall * 1000000;
        pl.salary = pl.overall * 750;
        return pl;
    }
}
