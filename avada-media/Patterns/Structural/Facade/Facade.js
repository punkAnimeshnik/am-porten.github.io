var Facade = /** @class */ (function () {
    function Facade(bigsubsystem, nasasubsystem) {
        if (bigsubsystem === void 0) { bigsubsystem = null; }
        if (nasasubsystem === void 0) { nasasubsystem = null; }
        this.bigsubsystem = bigsubsystem || new BigSubsystem();
        this.nasasubsystem = nasasubsystem || new NasaSubsystem();
    }
    Facade.prototype.operation = function () {
        var result = 'Наша программа инициализировала:\n';
        result += this.bigsubsystem.operationInit();
        result += this.nasasubsystem.operationInit();
        result += 'Но при этом она использует:\n';
        result += this.bigsubsystem.operationText();
        result += this.nasasubsystem.operationSum();
        return result;
    };
    return Facade;
}());
var BigSubsystem = /** @class */ (function () {
    function BigSubsystem() {
    }
    BigSubsystem.prototype.operationInit = function () {
        return 'Очень большую подсистему!\n';
    };
    BigSubsystem.prototype.operationText = function () {
        return 'Код который нужен для вывода этого текста)\n';
    };
    return BigSubsystem;
}());
var NasaSubsystem = /** @class */ (function () {
    function NasaSubsystem() {
    }
    NasaSubsystem.prototype.operationInit = function () {
        return 'Огромную подсистему которую используют для запуска ракет в НАСА\n';
    };
    NasaSubsystem.prototype.operationSum = function () {
        var sum = 2 + 2;
        return "\u041A\u043E\u0434 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0443\u0436\u0435\u043D \u0434\u043B\u044F \u0441\u043B\u043E\u0436\u0435\u043D\u0438\u044F: 2+2=" + sum;
    };
    return NasaSubsystem;
}());
function clientCode(facade) {
    console.log(facade.operation());
}
var bigsubsystem = new BigSubsystem();
var nasasubsystem = new NasaSubsystem();
var facade = new Facade(bigsubsystem, nasasubsystem);
clientCode(facade);
