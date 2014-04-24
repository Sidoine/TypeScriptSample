interface IIndividual {
    firstName: string
    lastName: string
    clientCode?: string
}

export enum Sex {
    Male,
    Female
}

export class Individual {
    sex: Sex
    constructor(public firstName: string, public lastName: string) {
    }
}

export class Node {
    name: string
    type: string
    id: number
    main: boolean
}

export class Team extends Node {
    manager: Individual
}

export interface TeamMember {
    team: Node
}

export class Employee extends Individual implements TeamMember, NodeQuery {
    team: Node
    organizations: Node[] = new Array<Node>();

    getNode(x: string): Node;
    getNode(x: number): Node
    getNode(x): Node {
        if (typeof x == "string")
            return this.organizations.filter(team => team.name == x)[0];
        else
            return this.organizations.filter(team => team.id == x)[0];
    }

    getNodesByType(type: string): Node[] {
        return this.organizations.filter(team => team.type == type);
    }
}

export interface NodeQuery {
    getNodesByType(type: "team"): Team[];
    getNodesByType(type: string): Node[];
}
