var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Конкретные Компоненты предоставляют реализации поведения по умолчанию. Может
 * быть несколько вариаций этих классов.
 */
var Send = /** @class */ (function () {
    function Send() {
    }
    Send.prototype.operation = function () {
        return 'Отправка сообщения';
    };
    return Send;
}());
/**
 * Базовый класс Декоратора следует тому же интерфейсу, что и другие компоненты.
 * Основная цель этого класса - определить интерфейс обёртки для всех конкретных
 * декораторов. Реализация кода обёртки по умолчанию может включать в себя поле
 * для хранения завёрнутого компонента и средства его инициализации.
 */
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    /**
     * Декоратор делегирует всю работу обёрнутому компоненту.
     */
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
/**
 * Конкретные Декораторы вызывают обёрнутый объект и изменяют его результат
 * некоторым образом.
 */
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Декораторы могут вызывать родительскую реализацию операции, вместо того,
     * чтобы вызвать обёрнутый объект напрямую. Такой подход упрощает расширение
     * классов декораторов.
     */
    Login.prototype.operation = function () {
        return "\u0412\u0445\u043E\u0434 \u0432 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C(" + _super.prototype.operation.call(this) + ")";
    };
    return Login;
}(Decorator));
/**
 * Декораторы могут выполнять своё поведение до или после вызова обёрнутого
 * объекта.
 */
var socNet = /** @class */ (function (_super) {
    __extends(socNet, _super);
    function socNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    socNet.prototype.operation = function () {
        return "\u0412\u0445\u043E\u0434 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438(" + _super.prototype.operation.call(this) + ")";
    };
    return socNet;
}(Decorator));
/**
 * Клиентский код работает со всеми объектами, используя интерфейс Компонента.
 * Таким образом, он остаётся независимым от конкретных классов компонентов, с
 * которыми работает.
 */
function clientCode(component) {
    // ...
    console.log("" + component.operation());
    // ...
}
/**
 * Таким образом, клиентский код может поддерживать как простые компоненты...
 */
var send = new Send();
console.log('Программа СМС оповещения:');
clientCode(send);
console.log('');
/**
 * ...так и декорированные.
 *
 * Обратите внимание, что декораторы могут обёртывать не только простые
 * компоненты, но и другие декораторы.
 */
var login = new Login(send);
var socnet = new socNet(login);
console.log('Программа оповещения в социальных сетях:');
clientCode(socnet);
