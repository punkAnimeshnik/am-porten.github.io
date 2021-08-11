interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class Newspaper implements Subject {

    public state: number;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = false; //this.observers.includes(observer);
        if (isExist) {
            return console.log('Газета: Подписчик уже есть в базе.');
        }

        console.log('Газета: Подписчик добавлен в базу.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Газета: Подписчика нет в базе.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Газета: Подписчик удален из базе.');
    }

    public notify(): void {
        console.log('Газета: уведомляем подписчиков...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        this.state = Math.floor(Math.random() * (5 + 1));
        this.notify();
    }
}

interface Observer {
    update(news: Subject): void;
}

class Tom implements Observer {
    public update(news: Subject): void {
        if (news instanceof Newspaper && news.state < 3) {
            console.log('Том: Мне нравится эта газета в ней выходят статьи про спорт');
        }
    }
}

class Harry implements Observer {
    public update(news: Subject): void {
        if (news instanceof Newspaper && (news.state === 0 || news.state >= 3)) {
            console.log('Гарри: Мне нравится эта газета в ней выходят статьи про магию!');
        }
    }
}


const news = new Newspaper();

const Tomas = new Tom();
news.attach(Tomas);

const Potter = new Harry();
news.attach(Potter);

news.someBusinessLogic();
news.someBusinessLogic();

news.detach(Potter);

news.someBusinessLogic();