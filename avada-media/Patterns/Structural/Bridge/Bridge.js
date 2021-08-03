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
var VideoFotoEditorImplementation = /** @class */ (function () {
    function VideoFotoEditorImplementation() {
    }
    VideoFotoEditorImplementation.prototype.operationImplementation = function () {
        return 'запустилась среда обработки фото и видео';
    };
    return VideoFotoEditorImplementation;
}());
var IDEImplementation = /** @class */ (function () {
    function IDEImplementation() {
    }
    IDEImplementation.prototype.operationImplementation = function () {
        return 'запустась среда разработки ПО';
    };
    return IDEImplementation;
}());
function clientCode(abstraction) {
    console.log(abstraction.operation());
}
var implementation = new VideoFotoEditorImplementation();
var abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log('');
implementation = new IDEImplementation();
abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log('');
implementation = new VideoFotoEditorImplementation();
abstraction = new AbstractionMacOs(implementation);
clientCode(abstraction);
console.log('');
implementation = new IDEImplementation();
abstraction = new AbstractionWindows(implementation);
clientCode(abstraction);
