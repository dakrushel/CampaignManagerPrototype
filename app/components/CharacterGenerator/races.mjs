import { RNGesusStats, PickANumber } from "./rnGesus.mjs";

class BaseCharacter {
    constructor() {
        this.gender = "";
        this.alignment = "";
        this.stats = RNGesusStats();
        this.quirks = "";
        this.features = "";
        this.vices = "";
        this.virtues = "";
        this.ideals = "";
    }
}

class Human extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        for (let i = 0; i < this.stats.length; i++) {
            this.stats[i] += 1;
        }

        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop();
        this.constitution = this.stats.pop();
        this.intelligence = this.stats.pop();
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop();

        this.charName = "";
        this.age = PickANumber(14, 70);
        this.race = "Human";
        this.size = "Medium";
        this.speed = "30";
    }
}

class Dwarf extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        
        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop();
        this.constitution = this.stats.pop() + 2;
        this.intelligence = this.stats.pop();
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop();

        this.charName = "";
        this.age = PickANumber(30, 350);
        this.race = "Dwarf";
        this.size = "Medium";
        this.speed = "25";
    }
}

class Elf extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        
        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop() + 2;
        this.constitution = this.stats.pop();
        this.intelligence = this.stats.pop();
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop();

        this.charName = "";
        this.age = PickANumber(75, 750);
        this.race = "Elf";
        this.size = "Medium";
        this.speed = "30";
    }
}

class Halfing extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        
        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop() + 2;
        this.constitution = this.stats.pop();
        this.intelligence = this.stats.pop();
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop();

        this.charName = "";
        this.age = PickANumber(14, 150);
        this.race = "Halfling";
        this.size = "Small";
        this.speed = "25";
    }
}

class Gnome extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        
        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop();
        this.constitution = this.stats.pop();
        this.intelligence = this.stats.pop() + 2;
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop();

        this.charName = "";
        this.age = PickANumber(25, 400);
        this.race = "Gnome";
        this.size = "Small";
        this.speed = "25";
    }
}

class Tiefling extends BaseCharacter {
    
    //No arg CTOR
    constructor() {
        super();
        
        this.strength = this.stats.pop();
        this.dexterity = this.stats.pop();
        this.constitution = this.stats.pop();
        this.intelligence = this.stats.pop();
        this.wisdom = this.stats.pop();
        this.charisma = this.stats.pop() + 2;

        this.charName = "";
        this.age = PickANumber(14, 70);
        this.race = "Tiefling";
        this.size = "Medium";
        this.speed = "30";
    }
}

const racesArray = [Human, Dwarf, Elf, Halfing, Gnome, Tiefling];

const racesList = [];
racesArray.forEach(function(template) {
    const instance = new template();
    racesList.push(instance.race)
});

export { racesArray, racesList, BaseCharacter };