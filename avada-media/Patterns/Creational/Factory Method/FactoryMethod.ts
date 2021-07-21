interface Product {
    operation(): string;
}

abstract class Creator {
    public abstract factoryMethod(): Product;
    public someOperation(): string {
        const product = this.factoryMethod();
        return `Данный код работает с ${product.operation()}`;
    }
}

class InterestingProduct implements Product {
    public operation(): string {
        return 'Интересным продуктом';
    }
}

class NotInterestingProduct implements Product {
    public operation(): string {
        return 'Менее интересным, но не менее важным продуктом';
    }
}

class InterestingCreator extends Creator {
    public factoryMethod(): Product {
        return new InterestingProduct();
    }
}

class NotInterestingCreator extends Creator {
    public factoryMethod(): Product {
        return new NotInterestingProduct();
    }
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('Объект класса InterestingCreator.');
clientCode(new InterestingCreator());
console.log('');

console.log('Объект класса NotInterestingCreator.');
clientCode(new NotInterestingCreator());