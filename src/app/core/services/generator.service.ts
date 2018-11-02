import { Injectable } from '@angular/core';
import { Player } from '../../shared/model/player';
import { firstName, lastName, countries } from '../../config/localdata';
import { StorageService } from './storage.service';

@Injectable()
export class GeneratorService {

    constructor(private storage: StorageService) { }

    createPlayer(id, teamId, youth = false): Player {
        const pl = new Player();
        pl.id = id;

        pl.national = countries[Math.floor(Math.random() * countries.length)];
        const fn = Math.floor(Math.random() * firstName[pl.national].length);
        const ln = Math.floor(Math.random() * lastName[pl.national].length);
        pl.name = firstName[pl.national][fn] + ' ' + lastName[pl.national][ln];
        pl.age = (youth == true) ? 18 : Math.floor(Math.random() * 18) + 18;
        pl.attack = Math.floor(Math.random() * 20) + 1;
        pl.defend = Math.floor(Math.random() * 20) + 1;
        pl.goalkeeper = Math.floor(Math.random() * 20) + 1;
        pl.finish = Math.floor(Math.random() * 20) + 1;
        pl.morale = 4;
        pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish;
        pl.teamId = teamId;
        pl.number = Math.floor(Math.random() * 99) + 1;
        while(this.isValidShirtNumber(pl.number, pl.teamId)) {
            pl.number = Math.floor(Math.random() * 99) + 1;
        }
        this.addShirtNumberToTeam(pl.number, pl.teamId);
        pl.price = this.calculatePrice(pl.overall, pl.age);
        pl.salary = this.calculateSalary(pl.overall, pl.age);
        return pl;
    }

    calculatePrice(overall, age) {
        if (age >= 29 && age <= 31)
            return Math.floor(overall * 1000000 * (18 / age));
        else if (age >= 32)
            return Math.floor(overall * 1000000 * (18 / age) * (18 / age));
        else return Math.floor(overall * 1000000);
    }

    calculateSalary(overall, age) {
        return Math.floor(overall * 12000 * (18 / age));
    }

    isValidShirtNumber(shirt, teamId) {
        const teams = this.storage.getTeams();
        const numbers = teams[teamId - 1].shirtNumber;
        return numbers.indexOf(shirt) != -1;
    }

    addShirtNumberToTeam(shirt, teamId) {
        const teams = this.storage.getTeams();
        const numbers = teams[teamId - 1].shirtNumber;
        numbers.push(shirt);
        teams[teamId - 1].shirtNumber = numbers;
        this.storage.setTeams(teams);
    }
}
