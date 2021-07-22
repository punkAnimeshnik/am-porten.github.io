var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Абстракция устанавливает интерфейс для «управляющей» части двух иерархий
 * классов. Она содержит ссылку на объект из иерархии Реализации и делегирует
 * ему всю настоящую работу.
 */
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "\u0412\u044B \u043D\u0430\u0436\u0430\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0443 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0439 \u041E\u0421 \u0438 \n" + result;
    };
    return Abstraction;
}());
/**
 * Можно расширить Абстракцию без изменения классов Реализации.
 */
var AbstractionMacOs = /** @class */ (function (_super) {
    __extends(AbstractionMacOs, _super);
    function AbstractionMacOs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractionMacOs.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "\u0412\u044B \u043D\u0430\u0436\u0430\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0443 \u043D\u0430 MacOS \u0438\n" + result;
    };
    return AbstractionMacOs;
}(Abstraction));
var AbstractionWindows = /** @class */ (function (_super) {
    __extends(AbstractionWindows, _super);
    function AbstractionWindows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractionWindows.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "\u0412\u044B \u043D\u0430\u0436\u0430\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0443 \u043D\u0430 Windows \u0438\n" + result;
    };
    return AbstractionWindows;
}(Abstraction));
/**
 * Каждая Конкретная Реализация соответствует определённой платформе и реализует
 * интерфейс Реализации с использованием API этой платформы.
 */
var MacOsImplementation = /** @class */ (function () {
    function MacOsImplementation() {
    }
    MacOsImplementation.prototype.operationImplementation = function () {
        return 'запустилась среда обработки фото и видео';
    };
    return MacOsImplementation;
}());
var WindowsImplementation = /** @class */ (function () {
    function WindowsImplementation() {
    }
    WindowsImplementation.prototype.operationImplementation = function () {
        return 'запустась среда разработки ПО';
    };
    return WindowsImplementation;
}());
/**
 * За исключением этапа инициализации, когда объект Абстракции связывается с
 * определённым объектом Реализации, клиентский код должен зависеть только от
 * класса Абстракции. Таким образом, клиентский код может поддерживать любую
 * комбинацию абстракции и реализации.
 */
function clientCode(abstraction) {
    // ..
    console.log(abstraction.operation());
    // ..
}
/**
 * Клиентский код должен работать с любой предварительно сконфигурированной
 * комбинацией абстракции и реализации.
 */
var implementation = new MacOsImplementation();
var abstraction = new Abstraction(implementation);
clientCode(abstraction);
implementation = new WindowsImplementation();
abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log('');
implementation = new MacOsImplementation();
abstraction = new AbstractionMacOs(implementation);
clientCode(abstraction);
console.log('');
implementation = new WindowsImplementation();
abstraction = new AbstractionWindows(implementation);
clientCode(abstraction);
