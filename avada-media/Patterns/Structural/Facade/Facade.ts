class Facade {
    protected bigsubsystem: BigSubsystem;

    protected nasasubsystem: NasaSubsystem;

    constructor(bigsubsystem: BigSubsystem = null, nasasubsystem: NasaSubsystem = null) {
        this.bigsubsystem = bigsubsystem || new BigSubsystem();
        this.nasasubsystem = nasasubsystem || new NasaSubsystem();
    }

    public operation(): string {
        let result = 'Наша программа инициализировала:\n';
        result += this.bigsubsystem.operationInit();
        result += this.nasasubsystem.operationInit();
        result += 'Но при этом она использует:\n';
        result += this.bigsubsystem.operationText();
        result += this.nasasubsystem.operationSum();

        return result;
    }
}

class BigSubsystem {
    public operationInit(): string {
        return 'Очень большую подсистему!\n';
    }
    public operationText(): string {
        return 'Код который нужен для вывода этого текста)\n';
    }
}

class NasaSubsystem {
    public operationInit(): string {
        return 'Огромную подсистему которую используют для запуска ракет в НАСА\n';
    }

    public operationSum(): string {
        let sum:number = 2+2;
        return `Код который нужен для сложения: 2+2=${sum}`;
    }
}

function clientCode(facade: Facade) {

    console.log(facade.operation());

}

const bigsubsystem = new BigSubsystem();
const nasasubsystem = new NasaSubsystem();
const facade = new Facade(bigsubsystem, nasasubsystem);
clientCode(facade);