class Prototype {
    public hairColor: any;
    public bodyType: object;
    public skills: twinSkills;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.bodyType);

        clone.skills = {
            ...this.skills,
            run: { ...this },
        };

        return clone;
    }
}

class twinSkills {
    public run;

    constructor(run: Prototype) {
        this.run = run;
    }
}

class Body{
    public height:number = 175;
    public weight: number = 75;
    public waist:number = 64;
    public chest:number = 95;
    public shouldersBack:number = 34;
}

function clientCode() {
    const Alex = new Prototype();
    Alex.hairColor = "Blue";
    Alex.bodyType = new Body();
    Alex.skills = new twinSkills(Alex);

    const Piter = Alex.clone();
    if (Alex.hairColor === Piter.hairColor) {
        console.log('У близнецов одинаковый цвет волос!');
    } else {
        console.log('Странно у близнецов разный чвет волос!');
    }
    if (Alex.bodyType === Piter.bodyType) {
        console.log('У близнецов одинаковое телосложение!');
    } else {
        console.log('Странно у близнецов разное телосложение!');
    }

    if (Alex.skills === Piter.skills) {
        console.log('У близнецов разные умения!');
    } else {
        console.log('У близнецов похожые умения!');
    }

    if (Alex.skills.run === Piter.skills.run) {
        console.log('Но Питер бегает лучше!');
    } else {
        console.log('Но Алекс бегает лучше!');
    }
}

clientCode();