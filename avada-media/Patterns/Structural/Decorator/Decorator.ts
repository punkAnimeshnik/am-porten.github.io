interface Component {
    operation(): string;
}

class Send implements Component {
    public operation(): string {
        return 'Отправка сообщения';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class Login  extends Decorator {

    public operation(): string {
        return `Вход в учетную запись(${super.operation()})`;
    }
}

class socNet extends Decorator {
    public operation(): string {
        return `Вход на сайт социальной сети(${super.operation()})`;
    }
}

function clientCode(component: Component) {
    console.log(`${component.operation()}`);
}

const send = new Send();
console.log('Программа СМС оповещения:');
clientCode(send);
console.log('');

const login = new Login(send);
const socnet = new socNet(login);
console.log('Программа оповещения в социальных сетях:');
clientCode(socnet);