class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Вы нажали иконку на странной ОС и \n${result}`;
    }
}

class AbstractionMacOs extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Вы нажали иконку на MacOS и\n${result}`;
    }
}

class AbstractionWindows extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Вы нажали иконку на Windows и\n${result}`;
    }
}

interface Implementation {
    operationImplementation(): string;
}

class VideoFotoEditorImplementation implements Implementation {
    public operationImplementation(): string {
        return 'запустилась среда обработки фото и видео';
    }
}

class IDEImplementation implements Implementation {
    public operationImplementation(): string {
        return 'запустась среда разработки ПО';
    }
}

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

let implementation = new VideoFotoEditorImplementation();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new IDEImplementation();
abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new VideoFotoEditorImplementation();
abstraction = new AbstractionMacOs(implementation);
clientCode(abstraction);

console.log('');

implementation = new IDEImplementation();
abstraction = new AbstractionWindows(implementation);
clientCode(abstraction);
