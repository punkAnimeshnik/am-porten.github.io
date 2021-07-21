class Singleton {
    private static instance: Singleton;
    private constructor() { }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    public someBusinessLogic() {
        return "Строка бизнес логики"
    }
}
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log("Переменные содержат одинаковые экземпляры\n1.",s1.someBusinessLogic(),"\n2.",s2.someBusinessLogic());
    } else {
        console.log('Переменные содержат разные экземпляры.');
    }
}

clientCode();