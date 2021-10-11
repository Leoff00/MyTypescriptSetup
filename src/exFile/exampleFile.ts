export default class exampleObject {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    show(): string {
        return `- ${this.name} ${this.surname} -`;
    }
}
