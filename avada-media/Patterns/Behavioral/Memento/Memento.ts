class Originator {

    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Текущее состояние: ${state}`);
    }

    public doSomething(): void {
        console.log('Изменение состояния!');
        this.state = this.generateRandomString(15);
        console.log(`Новое состояние: ${this.state}`);
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 'йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';

        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Memento {
        return new Camera(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Текущее состояние вернулось к ${this.state}`);
    }
}

interface Memento {
    getState(): string;

    getName(): string;

    getDate(): string;
}

class Camera implements Memento {
    private state: string;

    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }

    public getDate(): string {
        return this.date;
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nСохранение состояния');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`Восстановление состояния до : ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Список снимков:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Шла-Саша-по-шосе-и-сосала-сушку.');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');
caretaker.showHistory();

console.log('\nКлиент: А теперь откатимся!\n');
caretaker.undo();

console.log('\nКлиент: Ещё раз!\n');
caretaker.undo();