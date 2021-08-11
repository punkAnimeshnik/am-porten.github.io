interface Component {
    accept(visitor: Visitor): void;
}

class Petya implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitPetya(this);
    }

    public methodOfPetya(): string {
        return 'К Пете в гости пришел';
    }
}

class Sasha implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitSasha(this);
    }

    public methodOfSasha(): string {
        return 'К Саше в гости пришел';
    }
}

interface Visitor {
    visitPetya(element: Petya): void;

    visitSasha(element: Sasha): void;
}

class Dima implements Visitor {
    public visitPetya(element: Petya): void {
        console.log(`${element.methodOfPetya()} Дима с печеньем`);
    }

    public visitSasha(element: Sasha): void {
        console.log(`${element.methodOfSasha()} Дима с конфетами`);
    }
}

class Vanya implements Visitor {
    public visitPetya(element: Petya): void {
        console.log(`${element.methodOfPetya()} Ваня с соком`);
    }

    public visitSasha(element: Sasha): void {
        console.log(`${element.methodOfSasha()} Ваня с напитком`);
    }
}

function clientCode(components: Component[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new Petya(),
    new Sasha(),
];

console.log('Первым по гостям пошел Дима:');
const visitor1 = new Dima();
clientCode(components, visitor1);
console.log('');

console.log('После этого пошел Ваня:');
const visitor2 = new Vanya();
clientCode(components, visitor2);