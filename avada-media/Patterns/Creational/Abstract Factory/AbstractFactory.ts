interface AbstractFactory {
    createProductDoor(): AbstractProductDoor;
    createProductWindow(): AbstractProductWindow;
}


class ConcreteFactoryСircle implements AbstractFactory {
    public createProductDoor(): AbstractProductDoor {
        return new ConcreteProductСircleDoor();
    }

    public createProductWindow(): AbstractProductWindow {
        return new ConcreteProductСircleWindow();
    }
}


class ConcreteFactorySquare implements AbstractFactory {
    public createProductDoor(): AbstractProductDoor {
        return new ConcreteProductSquareDoor();
    }

    public createProductWindow(): AbstractProductWindow {
        return new ConcreteProductSquareWindow();
    }
}

interface AbstractProductDoor {
    usefulFunctionDoor(): string;
}


class ConcreteProductСircleDoor implements AbstractProductDoor {
    public usefulFunctionDoor(): string {
        return 'Круглое окно';
    }
}

class ConcreteProductSquareDoor implements AbstractProductDoor {
    public usefulFunctionDoor(): string {
        return 'Квадаратное окно';
    }
}


interface AbstractProductWindow {

    usefulFunctionWindow(): string;

    anotherUsefulFunctionWindow(collaborator: AbstractProductDoor): string;
}


class ConcreteProductСircleWindow implements AbstractProductWindow {

    public usefulFunctionWindow(): string {
        return 'Круглая дверь';
    }


    public anotherUsefulFunctionWindow(collaborator: AbstractProductDoor): string {
        const result = collaborator.usefulFunctionDoor();
        return `Круглая дверь и ${result} одной формы`;
    }
}

class ConcreteProductSquareWindow implements AbstractProductWindow {

    public usefulFunctionWindow(): string {
        return 'Квадратная дверь';
    }


    public anotherUsefulFunctionWindow(collaborator: AbstractProductDoor): string {
        const result = collaborator.usefulFunctionDoor();
        return `Квадратная дверь и ${result} одной формы`;
    }
}


function clientCode(factory: AbstractFactory) {
    const productDoor = factory.createProductDoor();
    const productWindow = factory.createProductWindow();

    console.log(productWindow.usefulFunctionWindow());
    console.log(productWindow.anotherUsefulFunctionWindow(productDoor));
}

console.log('Фабрика круга:');
clientCode(new ConcreteFactoryСircle());

console.log('');

console.log('Фабрика квадарата');
clientCode(new ConcreteFactorySquare());