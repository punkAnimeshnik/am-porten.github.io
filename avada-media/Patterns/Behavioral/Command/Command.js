var BeforeСounty = /** @class */ (function () {
    function BeforeСounty(payload) {
        this.payload = payload;
    }
    BeforeСounty.prototype.execute = function () {
        console.log("\u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u0443\u0435\u0445\u0430\u0442\u044C \u0432 \u043E\u0442\u043F\u0443\u0441\u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E " + this.payload);
    };
    return BeforeСounty;
}());
var AfterСounty = /** @class */ (function () {
    function AfterСounty(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    AfterСounty.prototype.execute = function () {
        console.log('После приезда из отпуска РБС должно.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return AfterСounty;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("\u041A \u043D\u0435\u0441\u0447\u0430\u0441\u0442\u044C\u044E \u0434\u043B\u044F \u0420\u0411\u0421 " + a + ".");
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("\u0418 \u0431\u043E\u0440\u044F\u0441\u044C \u0441 \u043B\u0435\u043D\u044C\u044E " + b + ".");
    };
    return Receiver;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.actionsCounty = function (command) {
        this.county = command;
    };
    Invoker.prototype.actionsArrival = function (command) {
        this.arrival = command;
    };
    Invoker.prototype.doSomethingImportant = function () {
        console.log('РБС: Что необходимо сделать до того, как мы уедем в отпуск?');
        if (this.isCommand(this.county)) {
            this.county.execute();
        }
        console.log('РБС: Уезжает в отпуск');
        console.log('РБС: Что необходимо сделать после того как мы приедем из отпуска?');
        if (this.isCommand(this.arrival)) {
            this.arrival.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.actionsCounty(new BeforeСounty('Собрать вещи!'));
var receiver = new Receiver();
invoker.actionsArrival(new AfterСounty(receiver, 'Осознать что отпуск закончился', 'Разобрать вещи'));
invoker.doSomethingImportant();
