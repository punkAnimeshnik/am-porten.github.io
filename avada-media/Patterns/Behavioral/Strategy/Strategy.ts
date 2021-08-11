class Context {

    private strategy: Strategy;


    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }


    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }


    public BusinessLogic(): void {
        console.log('Контекст: сортировка данных с использованием стратегии');
        const result = this.strategy.sort(['а', 'б', 'в', 'г', 'д']);
        console.log(result.join(','));
    }
}

interface Strategy {
    sort(data: string[]): string[];
}

class normalSort implements Strategy {
    public sort(data: string[]): string[] {
        return data.sort();
    }
}

class reverseSort implements Strategy {
    public sort(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new normalSort());
console.log('Обычную сортировка.');
context.BusinessLogic();

console.log('');

console.log('Обратной сортировка.');
context.setStrategy(new reverseSort());
context.BusinessLogic();