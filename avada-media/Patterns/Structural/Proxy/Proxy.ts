interface Subject {
    request(): void;
}

class Comments implements Subject {
    public request(): void {
        console.log('Отправка комментрия!!!');
    }
}

class Censorship implements Subject {
    private comments: Comments;

    constructor(comments: Comments) {
        this.comments = comments;
    }

    public request(): void {
        if (this.checkComment()) {
            this.comments.request();
        }
    }

    private checkComment(): boolean {
        console.log('Проверка комментария на толерантность.');

        return true;
    }


}

function clientCode(subject: Subject) {
    subject.request();
}

console.log('Комментарии раньше:');
const comments = new Comments();
clientCode(comments);

console.log('');

console.log('Комментарии сейчас:');
const censorship = new Censorship(comments);
clientCode(censorship);