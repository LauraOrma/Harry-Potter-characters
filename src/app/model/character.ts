import { Wand } from './wand';

export class Character {
    name: string;
    image: string;
    house: string;
    hogwartsStaff: boolean;
    dateOfBirth: string;
    actor: string;
    alive: boolean;
    wand: Wand;

    constructor(
        name,
        image,
        house,
        hogwartsStaff,
        dateOfBirth,
        actor,
        alive,
        wand) {
            this.name = name;
            this.image = image;
            this.house = house;
            this.hogwartsStaff = hogwartsStaff;
            this.dateOfBirth = dateOfBirth;
            this.actor = actor;
            this.alive = alive;
            this.wand = wand;
        }
}
