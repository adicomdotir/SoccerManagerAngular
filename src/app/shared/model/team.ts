export class Team {
    id: number;
    name: string;
    overall: number;
    budget: number = 50000000;

    constructor(id, name, overall) {
        this.id = id;
        this.name = name;
        this.overall = overall;
    }
}