var Newspaper = /** @class */ (function () {
    function Newspaper() {
        this.observers = [];
    }
    Newspaper.prototype.attach = function (observer) {
        var isExist = false; //this.observers.includes(observer);
        if (isExist) {
            return console.log('Газета: Подписчик уже есть в базе.');
        }
        console.log('Газета: Подписчик добавлен в базу.');
        this.observers.push(observer);
    };
    Newspaper.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Газета: Подписчика нет в базе.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Газета: Подписчик удален из базе.');
    };
    Newspaper.prototype.notify = function () {
        console.log('Газета: уведомляем подписчиков...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    Newspaper.prototype.someBusinessLogic = function () {
        this.state = Math.floor(Math.random() * (5 + 1));
        this.notify();
    };
    return Newspaper;
}());
var Tom = /** @class */ (function () {
    function Tom() {
    }
    Tom.prototype.update = function (news) {
        if (news instanceof Newspaper && news.state < 3) {
            console.log('Том: Мне нравится эта газета в ней выходят статьи про спорт');
        }
    };
    return Tom;
}());
var Harry = /** @class */ (function () {
    function Harry() {
    }
    Harry.prototype.update = function (news) {
        if (news instanceof Newspaper && (news.state === 0 || news.state >= 3)) {
            console.log('Гарри: Мне нравится эта газета в ней выходят статьи про магию!');
        }
    };
    return Harry;
}());
var news = new Newspaper();
var Tomas = new Tom();
news.attach(Tomas);
var Potter = new Harry();
news.attach(Potter);
news.someBusinessLogic();
news.someBusinessLogic();
news.detach(Potter);
news.someBusinessLogic();
