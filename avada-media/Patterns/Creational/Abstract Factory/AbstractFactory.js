var ConcreteFactoryСircle = /** @class */ (function () {
    function ConcreteFactoryСircle() {
    }
    ConcreteFactoryСircle.prototype.createProductDoor = function () {
        return new ConcreteProductСircleDoor();
    };
    ConcreteFactoryСircle.prototype.createProductWindow = function () {
        return new ConcreteProductСircleWindow();
    };
    return ConcreteFactoryСircle;
}());
var ConcreteFactorySquare = /** @class */ (function () {
    function ConcreteFactorySquare() {
    }
    ConcreteFactorySquare.prototype.createProductDoor = function () {
        return new ConcreteProductSquareDoor();
    };
    ConcreteFactorySquare.prototype.createProductWindow = function () {
        return new ConcreteProductSquareWindow();
    };
    return ConcreteFactorySquare;
}());
var ConcreteProductСircleDoor = /** @class */ (function () {
    function ConcreteProductСircleDoor() {
    }
    ConcreteProductСircleDoor.prototype.usefulFunctionDoor = function () {
        return 'Круглое окно';
    };
    return ConcreteProductСircleDoor;
}());
var ConcreteProductSquareDoor = /** @class */ (function () {
    function ConcreteProductSquareDoor() {
    }
    ConcreteProductSquareDoor.prototype.usefulFunctionDoor = function () {
        return 'Квадаратное окно';
    };
    return ConcreteProductSquareDoor;
}());
var ConcreteProductСircleWindow = /** @class */ (function () {
    function ConcreteProductСircleWindow() {
    }
    ConcreteProductСircleWindow.prototype.usefulFunctionWindow = function () {
        return 'Круглая дверь';
    };
    ConcreteProductСircleWindow.prototype.anotherUsefulFunctionWindow = function (collaborator) {
        var result = collaborator.usefulFunctionDoor();
        return "\u041A\u0440\u0443\u0433\u043B\u0430\u044F \u0434\u0432\u0435\u0440\u044C \u0438 " + result + " \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B";
    };
    return ConcreteProductСircleWindow;
}());
var ConcreteProductSquareWindow = /** @class */ (function () {
    function ConcreteProductSquareWindow() {
    }
    ConcreteProductSquareWindow.prototype.usefulFunctionWindow = function () {
        return 'Квадратная дверь';
    };
    ConcreteProductSquareWindow.prototype.anotherUsefulFunctionWindow = function (collaborator) {
        var result = collaborator.usefulFunctionDoor();
        return "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C \u0438 " + result + " \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B";
    };
    return ConcreteProductSquareWindow;
}());
function clientCode(factory) {
    var productDoor = factory.createProductDoor();
    var productWindow = factory.createProductWindow();
    console.log(productWindow.usefulFunctionWindow());
    console.log(productWindow.anotherUsefulFunctionWindow(productDoor));
}
console.log('Фабрика круга:');
clientCode(new ConcreteFactoryСircle());
console.log('');
console.log('Фабрика квадарата');
clientCode(new ConcreteFactorySquare());
