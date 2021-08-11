interface Mediator {
    notify(sender: object, event: string): void;
}

class Dispatcher implements Mediator {
    private superjet100: SuperJet100;
    private airbusA320: AirbusA320;

    constructor(c1: SuperJet100, c2: AirbusA320) {
        this.superjet100 = c1;
        this.superjet100.setMediator(this);
        this.airbusA320 = c2;
        this.airbusA320.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Диспетчер реагирует на взлет и приказывает:');
            this.airbusA320.doC();
        }

        if (event === 'D') {
            console.log('Диспетчер реагирует на посадку и приказывает:');
            this.superjet100.doB();
            this.airbusA320.doC();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class SuperJet100 extends BaseComponent {
    public doA(): void {
        console.log('SuperJet100 готовиться ко взлету.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('SuperJet100 произвести полет по второму кругу.');
        this.mediator.notify(this, 'B');
    }
}

class AirbusA320 extends BaseComponent {
    public doC(): void {
        console.log('AirbusA320 продолжить операцию.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('AirbusA320 готовиться к посадке.');
        this.mediator.notify(this, 'D');
    }
}

const c1 = new SuperJet100();
const c2 = new AirbusA320();
const dispatcher = new Dispatcher(c1, c2);

console.log('SuperJet100 дает запрос на взлет.');
c1.doA();

console.log('');
console.log('AirbusA320 дает запрос на посадку.');
c2.doD();