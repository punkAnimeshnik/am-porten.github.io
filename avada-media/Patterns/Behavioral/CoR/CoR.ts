interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Банан') {
            return `Обезьяна: Я съем ${request}.`;
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Орехи') {
            return `Белка: Я съем ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Мясо') {
            return `Собака: Я съем ${request}.`;
        }
        return super.handle(request);
    }
}

function clientCode(handler: Handler) {
    const foods = ['Орехи', 'Банан', 'Сено', 'Мясо'];

    for (const food of foods) {
        console.log(`Кто хочет ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(` ${result}`);
        } else {
            console.log(` ${food} ни кто не ест.`);
        }
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Цепочка: Обезьяна > Белка > Собака\n');
clientCode(monkey);
