class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Легковес: отображение общего (${s}) и уникального (${u}) состояния.`);
    }
}

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('Фабрика легковеса: не могу найти легковес, создаю новый.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('Фабрика легковеса: Повторное использование существующего легковеса.');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nФабрика легковеса: У меня есть ${count} легковесов:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'розовый'],
    ['Mercedes', 'C300', 'черный'],
    ['Mercedes', 'C500', 'красный'],
    ['BMW', 'M5', 'красный'],
    ['BMW', 'X6', 'белый'],
]);
factory.listFlyweights();

function addCarToPoliceDatabase(
    ff: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string,
) {
    console.log('\nКлиент: Добавление машины в базу данных.');
    const flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'АН6315ВН', 'Иван Васильевич', 'BMW', 'M5', 'красный');

addCarToPoliceDatabase(factory, 'АН6217ВН', 'Иван Васильевич', 'BMW', 'X1', 'красный');

factory.listFlyweights();