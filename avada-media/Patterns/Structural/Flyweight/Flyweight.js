var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        var s = JSON.stringify(this.sharedState);
        var u = JSON.stringify(uniqueState);
        console.log("\u041B\u0435\u0433\u043A\u043E\u0432\u0435\u0441: \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0433\u043E (" + s + ") \u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E (" + u + ") \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.");
    };
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('Фабрика легковеса: не могу найти легковес, создаю новый.');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('Фабрика легковеса: Повторное использование существующего легковеса.');
        }
        return this.flyweights[key];
    };
    FlyweightFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("\n\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u043B\u0435\u0433\u043A\u043E\u0432\u0435\u0441\u0430: \u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C " + count + " \u043B\u0435\u0433\u043A\u043E\u0432\u0435\u0441\u043E\u0432:");
        for (var key in this.flyweights) {
            console.log(key);
        }
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'розовый'],
    ['Mercedes', 'C300', 'черный'],
    ['Mercedes', 'C500', 'красный'],
    ['BMW', 'M5', 'красный'],
    ['BMW', 'X6', 'белый'],
]);
factory.listFlyweights();
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nКлиент: Добавление машины в базу данных.');
    var flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'АН6315ВН', 'Иван Васильевич', 'BMW', 'M5', 'красный');
addCarToPoliceDatabase(factory, 'АН6217ВН', 'Иван Васильевич', 'BMW', 'X1', 'красный');
factory.listFlyweights();
