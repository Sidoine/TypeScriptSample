interface IIndividual {
    firstName: string
    lastName: string
    clientCode?: string
}

class Individual {
    firstName: string
    lastName: string
}

class Form {
    fieldLabels: Array<string>

    constructor(labels: string) {
        this.fieldLabels = labels.split(',');
    }
}

class IndividualForm {
    appraiser: Individual
    appraisee: Individual
    form: Form
    fieldValues: Array<string>
}

function createRandomIndividual(): { firstName: string; lastName: string } {
    return {
        firstName: "First" + Math.floor(Math.random() * 100),
        lastName: "Last" + Math.floor(Math.random() * 100)
    }
}

var random: IIndividual = createRandomIndividual();
var form = new Form('a,b,c');

