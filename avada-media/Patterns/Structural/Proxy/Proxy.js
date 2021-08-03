var Comments = /** @class */ (function () {
    function Comments() {
    }
    Comments.prototype.request = function () {
        console.log('Отправка комментрия!!!');
    };
    return Comments;
}());
var Censorship = /** @class */ (function () {
    function Censorship(comments) {
        this.comments = comments;
    }
    Censorship.prototype.request = function () {
        if (this.checkComment()) {
            this.comments.request();
        }
    };
    Censorship.prototype.checkComment = function () {
        console.log('Проверка комментария на толерантность.');
        return true;
    };
    return Censorship;
}());
function clientCode(subject) {
    subject.request();
}
console.log('Комментарии раньше:');
var comments = new Comments();
clientCode(comments);
console.log('');
console.log('Комментарии сейчас:');
var censorship = new Censorship(comments);
clientCode(censorship);
