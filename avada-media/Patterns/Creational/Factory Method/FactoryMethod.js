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
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "\u0414\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 " + product.operation();
    };
    return Creator;
}());
var InterestingProduct = /** @class */ (function () {
    function InterestingProduct() {
    }
    InterestingProduct.prototype.operation = function () {
        return 'Интересным продуктом';
    };
    return InterestingProduct;
}());
var NotInterestingProduct = /** @class */ (function () {
    function NotInterestingProduct() {
    }
    NotInterestingProduct.prototype.operation = function () {
        return 'Менее интересным, но не менее важным продуктом';
    };
    return NotInterestingProduct;
}());
var InterestingCreator = /** @class */ (function (_super) {
    __extends(InterestingCreator, _super);
    function InterestingCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InterestingCreator.prototype.factoryMethod = function () {
        return new InterestingProduct();
    };
    return InterestingCreator;
}(Creator));
var NotInterestingCreator = /** @class */ (function (_super) {
    __extends(NotInterestingCreator, _super);
    function NotInterestingCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotInterestingCreator.prototype.factoryMethod = function () {
        return new NotInterestingProduct();
    };
    return NotInterestingCreator;
}(Creator));
function clientCode(creator) {
    console.log(creator.someOperation());
}
console.log('Объект класса InterestingCreator.');
clientCode(new InterestingCreator());
console.log('');
console.log('Объект класса NotInterestingCreator.');
clientCode(new NotInterestingCreator());
