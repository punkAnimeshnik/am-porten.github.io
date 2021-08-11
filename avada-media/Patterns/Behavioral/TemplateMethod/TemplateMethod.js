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
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.templateMethod = function () {
        this.baseOperation();
        this.sayHi();
        this.hook();
        this.sayBye();
    };
    AbstractClass.prototype.baseOperation = function () {
        console.log('Базовая операция выполнена!');
    };
    AbstractClass.prototype.hook = function () { };
    return AbstractClass;
}());
var Maks = /** @class */ (function (_super) {
    __extends(Maks, _super);
    function Maks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maks.prototype.sayHi = function () {
        console.log('Макс: Всем привет!');
    };
    Maks.prototype.sayBye = function () {
        console.log('Макс: Всем пока!');
    };
    return Maks;
}(AbstractClass));
var Piter = /** @class */ (function (_super) {
    __extends(Piter, _super);
    function Piter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piter.prototype.sayHi = function () {
        console.log('Питер: Здравстуйте товарищи!');
    };
    Piter.prototype.sayBye = function () {
        console.log('Питер: До свидания товарищи!');
    };
    Piter.prototype.hook = function () {
        console.log('Питер: Товарищи осталось немного и мы выполним пятилетку!');
    };
    return Piter;
}(AbstractClass));
function clientCode(abstractClass) {
    abstractClass.templateMethod();
}
console.log('Выступление Максима');
clientCode(new Maks());
console.log('');
console.log('Выступление Питера');
clientCode(new Piter());
