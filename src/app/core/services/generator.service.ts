import { Injectable } from '@angular/core';
import { Player } from '../../shared/model/player';
import { firstName, lastName, countries } from '../../config/localdata';
import { StorageService } from './storage.service';
import { Table } from '../../shared/model/table';
import { Match } from '../../shared/model/match';
import { User } from '../../shared/model/user';

@Injectable()
export class GeneratorService {

    divSize: number = 5;

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
        pl.creativity = Math.floor(Math.random() * 20) + 1;
        pl.attention = Math.floor(Math.random() * 20) + 1;
        pl.morale = 4;
        pl.overall = pl.attack + pl.defend + pl.goalkeeper + pl.finish + pl.attention + pl.creativity;
        pl.teamId = teamId;
        pl.number = Math.floor(Math.random() * 99) + 1;
        while (this.isValidShirtNumber(pl.number, pl.teamId)) {
            pl.number = Math.floor(Math.random() * 99) + 1;
        }
        this.addShirtNumberToTeam(pl.number, pl.teamId);
        pl.price = this.calculatePrice(pl.overall, pl.age);
        pl.salary = this.calculateSalary(pl);
        return pl;
    }

    calculatePrice(overall, age) {
        if (age >= 29 && age <= 31)
            return Math.floor(overall * 1000000 * (18 / age));
        else if (age >= 32)
            return Math.floor(overall * 1000000 * (18 / age) * (18 / age));
        else return Math.floor(overall * 1000000);
    }

    calculateSalary(player: Player) {
        let salary = player.attack * 14000;
        salary += player.defend * 13000;
        salary += player.goalkeeper * 11000;
        salary += player.finish * 12000;
        salary += player.creativity * 10000;
        salary += player.attention * 10000;
        return Math.floor(salary * (18 / player.age));
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

    generateTable() {
        const table: Table[] = [];
        const teams = this.storage.getTeams();
        for (let i = 0; i < teams.length; i++) {
            const temp = new Table();
            temp.id = table.length + 1;
            temp.teamId = teams[i].id;
            temp.teamDiv = teams[i].div;
            table.push(temp);
        }
        this.storage.setTable(table);
    }

    resetTable() {
        const table: Table[] = this.storage.getTable();
        for (let i = 0; i < table.length; i++) {
            table[i].draw = 0;
            table[i].ga = 0;
            table[i].game = 0;
            table[i].gd = 0;
            table[i].gf = 0;
            table[i].lose = 0;
            table[i].points = 0;
            table[i].win = 0;
        }
        this.storage.setTable(table);
    }

    generateMatches() {
        let user: User = this.storage.getUser();
        let size = user.size;

        const matches: Match[] = [];
        for (let k = 1; k <= this.divSize; k++) {
            const temp: number[] = [];
            const teams = this.storage.getTeams().filter(x => x.div == k);
            for (let i = 0; i < teams.length; i++) {
                temp.push(teams[i].id);
            }
            // Week 
            for (let i = 1; i <= (size - 1) * 2; i++) {
                // Match
                for (let j = 0; j < size / 2; j++) {
                    const matchTemp = new Match(matches.length + 1, i, temp[j], temp[size - 1 - j]);
                    matchTemp.div = k;
                    matches.push(matchTemp);
                }
                this.swapWeek(temp);
            }
        }
        this.storage.setMatches(matches);
    }

    swapWeek(temp: number[]) {
        let user: User = this.storage.getUser();
        let size = user.size;

        let lastTeamId = temp[size - 1];
        for (let i = size - 1; i > 0; i--) {
            temp[i] = temp[i - 1];
        }
        temp[1] = lastTeamId;
    }
}
