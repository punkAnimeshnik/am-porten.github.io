interface Command {
    execute(): void;
}

class BeforeСounty implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`Перед тем как уехать в отпуск необходимо ${this.payload}`);
    }
}

class AfterСounty implements Command {
    private receiver: Computer;

    private a: string;

    private b: string;

    constructor(receiver: Computer, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log('После приезда из отпуска РБС должно.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

class Computer {
    public doSomething(a: string): void {
        console.log(`К несчастью для РБС ${a}.`);
    }

    public doSomethingElse(b: string): void {
        console.log(`И борясь с ленью ${b}.`);
    }
}

class Human {
    private county: Command;

    private arrival: Command;

    public actionsCounty(command: Command): void {
        this.county = command;
    }

    public actionsArrival(command: Command): void {
        this.arrival = command;
    }

    public doSomethingImportant(): void {
        console.log('РБС: Что необходимо сделать до того, как мы уедем в отпуск?');
        if (this.isCommand(this.county)) {
            this.county.execute();
        }

        console.log('РБС: Уезжает в отпуск');

        console.log('РБС: Что необходимо сделать после того как мы приедем из отпуска?');
        if (this.isCommand(this.arrival)) {
            this.arrival.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

const invoker = new Human();
invoker.actionsCounty(new BeforeСounty('Собрать вещи!'));
const receiver = new Computer();
invoker.actionsArrival(new AfterСounty(receiver, 'Осознать что отпуск закончился', 'Разобрать вещи'));

invoker.doSomethingImportant();