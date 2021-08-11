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
var VAR = /** @class */ (function () {
    function VAR(state) {
        this.transitionTo(state);
    }
    VAR.prototype.transitionTo = function (state) {
        console.log("\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u0438\u0433\u043D\u0430\u043B \u043D\u0430 " + state.constructor.name + ".");
        this.state = state;
        this.state.setContext(this);
    };
    VAR.prototype.request1 = function () {
        this.state.on();
    };
    VAR.prototype.request2 = function () {
        this.state.off();
    };
    return VAR;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (rav) {
        this.rav = rav;
    };
    return State;
}());
var videoPlayer = /** @class */ (function (_super) {
    __extends(videoPlayer, _super);
    function videoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    videoPlayer.prototype.on = function () {
        console.log('Видеопроигрыватель включаеться.');
        console.log('Для удобного просмотра нужно аудио.');
        this.rav.transitionTo(new audioPlayer());
    };
    videoPlayer.prototype.off = function () {
        console.log('Видеопроигрыватель выключаеться.');
    };
    return videoPlayer;
}(State));
var audioPlayer = /** @class */ (function (_super) {
    __extends(audioPlayer, _super);
    function audioPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    audioPlayer.prototype.on = function () {
        console.log('Аудиопроигрыватель выключаеться.');
    };
    audioPlayer.prototype.off = function () {
        console.log('Аудиопроигрыватель включаеться.');
        console.log('Для удобства нужно совместить аудио и видео.');
        this.rav.transitionTo(new videoPlayer());
    };
    return audioPlayer;
}(State));
var context = new VAR(new videoPlayer());
context.request1();
context.request2();
