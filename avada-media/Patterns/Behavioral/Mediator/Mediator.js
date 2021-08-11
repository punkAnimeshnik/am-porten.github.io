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
var Dispatcher = /** @class */ (function () {
    function Dispatcher(c1, c2) {
        this.superjet100 = c1;
        this.superjet100.setMediator(this);
        this.airbusA320 = c2;
        this.airbusA320.setMediator(this);
    }
    Dispatcher.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('Диспетчер реагирует на взлет и приказывает:');
            this.airbusA320.doC();
        }
        if (event === 'D') {
            console.log('Диспетчер реагирует на посадку и приказывает:');
            this.superjet100.doB();
            this.airbusA320.doC();
        }
    };
    return Dispatcher;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var SuperJet100 = /** @class */ (function (_super) {
    __extends(SuperJet100, _super);
    function SuperJet100() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperJet100.prototype.doA = function () {
        console.log('SuperJet100 готовиться ко взлету.');
        this.mediator.notify(this, 'A');
    };
    SuperJet100.prototype.doB = function () {
        console.log('SuperJet100 произвести полет по второму кругу.');
        this.mediator.notify(this, 'B');
    };
    return SuperJet100;
}(BaseComponent));
var AirbusA320 = /** @class */ (function (_super) {
    __extends(AirbusA320, _super);
    function AirbusA320() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AirbusA320.prototype.doC = function () {
        console.log('AirbusA320 продолжить операцию.');
        this.mediator.notify(this, 'C');
    };
    AirbusA320.prototype.doD = function () {
        console.log('AirbusA320 готовиться к посадке.');
        this.mediator.notify(this, 'D');
    };
    return AirbusA320;
}(BaseComponent));
var c1 = new SuperJet100();
var c2 = new AirbusA320();
var dispatcher = new Dispatcher(c1, c2);
console.log('SuperJet100 дает запрос на взлет.');
c1.doA();
console.log('');
console.log('AirbusA320 дает запрос на посадку.');
c2.doD();
