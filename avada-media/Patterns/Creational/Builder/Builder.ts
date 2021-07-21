interface Builder {
    developmentTextEditor(): void;
    developmentFigma(): void;
    developmentChrome(): void;
}

class Development {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`При разработке использовался: ${this.parts.join(', ')}\n`);
    }
}

class developmentBuilder implements Builder {
    private development: Development;

     constructor() {
        this.reset();
    }

    public reset(): void {
        this.development = new Development();
    }

     public developmentTextEditor(): void {
        this.development.parts.push('Текстовый редактор');
    }

    public developmentFigma(): void {
        this.development.parts.push('Графический редактор Figma');
    }

    public developmentChrome(): void {
        this.development.parts.push('Интернет-браузер Chrome');
    }

    public getDevelopment(): Development {
        const result = this.development;
        this.reset();
        return result;
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public softwareDevelopment(): void {
        this.builder.developmentTextEditor();
    }

    public webDevelopment(): void {
        this.builder.developmentTextEditor();
        this.builder.developmentFigma();
        this.builder.developmentChrome();
    }
}

function clientCode(director: Director) {
    const builder = new developmentBuilder();
    director.setBuilder(builder);

    console.log('Требования для разработки ПО:');
    director.softwareDevelopment();
    builder.getDevelopment().listParts();

    console.log('Требования для разработки сайта:');
    director.webDevelopment();
    builder.getDevelopment().listParts();

    console.log('Требования для творческой разработки:');
    builder.developmentTextEditor();
    builder.developmentChrome();
    builder.getDevelopment().listParts();
}

const director = new Director();
clientCode(director);