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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var MonkeyHandler = /** @class */ (function (_super) {
    __extends(MonkeyHandler, _super);
    function MonkeyHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonkeyHandler.prototype.handle = function (request) {
        if (request === 'Банан') {
            return "\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0430: \u042F \u0441\u044A\u0435\u043C " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return MonkeyHandler;
}(AbstractHandler));
var SquirrelHandler = /** @class */ (function (_super) {
    __extends(SquirrelHandler, _super);
    function SquirrelHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquirrelHandler.prototype.handle = function (request) {
        if (request === 'Орехи') {
            return "\u0411\u0435\u043B\u043A\u0430: \u042F \u0441\u044A\u0435\u043C " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return SquirrelHandler;
}(AbstractHandler));
var DogHandler = /** @class */ (function (_super) {
    __extends(DogHandler, _super);
    function DogHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogHandler.prototype.handle = function (request) {
        if (request === 'Мясо') {
            return "\u0421\u043E\u0431\u0430\u043A\u0430: \u042F \u0441\u044A\u0435\u043C " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return DogHandler;
}(AbstractHandler));
function clientCode(handler) {
    var foods = ['Орехи', 'Банан', 'Сено', 'Мясо'];
    for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
        var food = foods_1[_i];
        console.log("\u041A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 " + food + "?");
        var result = handler.handle(food);
        if (result) {
            console.log(" " + result);
        }
        else {
            console.log(" " + food + " \u043D\u0438 \u043A\u0442\u043E \u043D\u0435 \u0435\u0441\u0442.");
        }
    }
}
var monkey = new MonkeyHandler();
var squirrel = new SquirrelHandler();
var dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);
console.log('Цепочка: Обезьяна > Белка > Собака');
clientCode(monkey);
