class Earth {
    public request(): string {
        return 'Привет Марсиани!!! Мы рады вас видеть)';
    }
}

class Mars {
    public specificRequest(): string {
        return '!!!морим с илширп ыМ !енялмеЗ тевирП';
    }
}

class Adapter extends Earth {
    private mars: Mars;

    constructor(mars: Mars) {
        super();
        this.mars = mars;
    }

    public request(): string {
        const result = this.mars.specificRequest().split('').reverse().join('');
        return `Адаптер: (Перевод) ${result}`;
    }
}

function clientCode(earth: Earth) {
    console.log(earth.request());
}

console.log('Земляне: Удивленно смотрят на звезды и в тишине с трепитанием говорят:');
const earth = new Earth();
clientCode(earth);

console.log('');

const mars = new Mars();
console.log('Земляне: С испугом оборачиваються на неизвестный голос:');
console.log(`Марсиане: ${mars.specificRequest()}`);

console.log('');

console.log('Земляне: С испугом смотрят на переводчик надеясь что закончится всё миром:');
const adapter = new Adapter(mars);
clientCode(adapter);