abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation();
        this.sayHi();
        this.hook();
        this.sayBye();
    }
    protected baseOperation(): void {
        console.log('Базовая операция выполнена!');
    }

    protected abstract sayHi(): void;

    protected abstract sayBye(): void;

    protected hook(): void { }
}

class Maks extends AbstractClass {
    protected sayHi(): void {
        console.log('Макс: Всем привет!');
    }

    protected sayBye(): void {
        console.log('Макс: Всем пока!');
    }
}

class Piter extends AbstractClass {
    protected sayHi(): void {
        console.log('Питер: Здравстуйте товарищи!');
    }

    protected sayBye(): void {
        console.log('Питер: До свидания товарищи!');
    }

    protected hook(): void {
        console.log('Питер: Товарищи осталось немного и мы выполним пятилетку!');
    }
}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

console.log('Выступление Максима');
clientCode(new Maks());
console.log('');

console.log('Выступление Питера');
clientCode(new Piter());