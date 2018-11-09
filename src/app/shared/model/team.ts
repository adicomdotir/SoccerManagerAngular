export class Team {
    id: number;
    name: string;
    overall: number;
    budget: number = 10000000;
    shirtNumber: number[] = [];
    div: number;

    constructor(id, name, overall) {
        this.id = id;
        this.name = name;
        this.overall = overall;
    }
}