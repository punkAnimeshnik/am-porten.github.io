var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBusinessLogic = function () {
        return "Строка бизнес логики";
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log("Переменные содержат одинаковые экземпляры\n1.", s1.someBusinessLogic(), "\n2.", s2.someBusinessLogic());
    }
    else {
        console.log('Переменные содержат разные экземпляры.');
    }
}
clientCode();
