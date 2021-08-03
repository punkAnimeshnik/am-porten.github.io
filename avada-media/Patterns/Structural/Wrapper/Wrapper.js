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
var Earth = /** @class */ (function () {
    function Earth() {
    }
    Earth.prototype.request = function () {
        return 'Привет Марсиани!!! Мы рады вас видеть)';
    };
    return Earth;
}());
var Mars = /** @class */ (function () {
    function Mars() {
    }
    Mars.prototype.specificRequest = function () {
        return '!!!морим с илширп ыМ !енялмеЗ тевирП';
    };
    return Mars;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(mars) {
        var _this = _super.call(this) || this;
        _this.mars = mars;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.mars.specificRequest().split('').reverse().join('');
        return "\u0410\u0434\u0430\u043F\u0442\u0435\u0440: (\u041F\u0435\u0440\u0435\u0432\u043E\u0434) " + result;
    };
    return Adapter;
}(Earth));
function clientCode(earth) {
    console.log(earth.request());
}
console.log('Земляне: Удивленно смотрят на звезды и в тишине с трепитанием говорят:');
var earth = new Earth();
clientCode(earth);
console.log('');
var mars = new Mars();
console.log('Земляне: С испугом оборачиваються на неизвестный голос:');
console.log("\u041C\u0430\u0440\u0441\u0438\u0430\u043D\u0435: " + mars.specificRequest());
console.log('');
console.log('Земляне: С испугом смотрят на переводчик надеясь что закончится всё миром:');
var adapter = new Adapter(mars);
clientCode(adapter);
