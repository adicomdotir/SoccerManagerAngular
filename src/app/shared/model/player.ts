export class Player {
    id: number;
    name: string;
    age: number;
    overall: number;
    attack: number;
    defend: number;
    teamId: number;
    national: string;
    number: number;
    finish: number;
    goalkeeper: number;
    morale: number;
    playedPlayer: number = 0;
    playedGK: number = 0;
    scored: number = 0;
    conceded: number = 0;
    retired: boolean = false;
}