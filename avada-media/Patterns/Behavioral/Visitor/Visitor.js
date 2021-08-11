var Petya = /** @class */ (function () {
    function Petya() {
    }
    Petya.prototype.accept = function (visitor) {
        visitor.visitPetya(this);
    };
    Petya.prototype.methodOfPetya = function () {
        return 'К Пете в гости пришел';
    };
    return Petya;
}());
var Sasha = /** @class */ (function () {
    function Sasha() {
    }
    Sasha.prototype.accept = function (visitor) {
        visitor.visitSasha(this);
    };
    Sasha.prototype.methodOfSasha = function () {
        return 'К Саше в гости пришел';
    };
    return Sasha;
}());
var Dima = /** @class */ (function () {
    function Dima() {
    }
    Dima.prototype.visitPetya = function (element) {
        console.log(element.methodOfPetya() + " \u0414\u0438\u043C\u0430 \u0441 \u043F\u0435\u0447\u0435\u043D\u044C\u0435\u043C");
    };
    Dima.prototype.visitSasha = function (element) {
        console.log(element.methodOfSasha() + " \u0414\u0438\u043C\u0430 \u0441 \u043A\u043E\u043D\u0444\u0435\u0442\u0430\u043C\u0438");
    };
    return Dima;
}());
var Vanya = /** @class */ (function () {
    function Vanya() {
    }
    Vanya.prototype.visitPetya = function (element) {
        console.log(element.methodOfPetya() + " \u0412\u0430\u043D\u044F \u0441 \u0441\u043E\u043A\u043E\u043C");
    };
    Vanya.prototype.visitSasha = function (element) {
        console.log(element.methodOfSasha() + " \u0412\u0430\u043D\u044F \u0441 \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u043C");
    };
    return Vanya;
}());
function clientCode(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
var components = [
    new Petya(),
    new Sasha(),
];
console.log('Первым по гостям пошел Дима:');
var visitor1 = new Dima();
clientCode(components, visitor1);
console.log('');
console.log('После этого пошел Ваня:');
var visitor2 = new Vanya();
clientCode(components, visitor2);
