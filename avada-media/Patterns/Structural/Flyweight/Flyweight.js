/**
 * Легковес хранит общую часть состояния (также называемую внутренним
 * состоянием), которая принадлежит нескольким реальным бизнес-объектам.
 * Легковес принимает оставшуюся часть состояния (внешнее состояние, уникальное
 * для каждого объекта) через его параметры метода.
 */
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
/**
 * Фабрика Легковесов создает объекты-Легковесы и управляет ими. Она
 * обеспечивает правильное разделение легковесов. Когда клиент запрашивает
 * легковес, фабрика либо возвращает существующий экземпляр, либо создает новый,
 * если он ещё не существует.
 */
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    /**
     * Возвращает хеш строки Легковеса для данного состояния.
     */
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    /**
     * Возвращает существующий Легковес с заданным состоянием или создает новый.
     */
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
/**
 * Клиентский код обычно создает кучу предварительно заполненных легковесов на
 * этапе инициализации приложения.
 */
var factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'розовый'],
    ['Mercedes', 'C300', 'черный'],
    ['Mercedes', 'C500', 'красный'],
    ['BMW', 'M5', 'красный'],
    ['BMW', 'X6', 'белый'],
]);
factory.listFlyweights();
// ...
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nКлиент: Добавление машины в базу данных.');
    var flyweight = ff.getFlyweight([brand, model, color]);
    // Клиентский код либо сохраняет, либо вычисляет внешнее состояние и
    // передает его методам легковеса.
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'АН6315ВН', 'Иван Васильевич', 'BMW', 'M5', 'красный');
addCarToPoliceDatabase(factory, 'АН6217ВН', 'Иван Васильевич', 'BMW', 'X1', 'красный');
factory.listFlyweights();
