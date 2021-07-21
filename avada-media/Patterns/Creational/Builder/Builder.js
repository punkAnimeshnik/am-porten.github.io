var Development = /** @class */ (function () {
    function Development() {
        this.parts = [];
    }
    Development.prototype.listParts = function () {
        console.log("\u041F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0441\u044F: " + this.parts.join(', ') + "\n");
    };
    return Development;
}());
var developmentBuilder = /** @class */ (function () {
    function developmentBuilder() {
        this.reset();
    }
    developmentBuilder.prototype.reset = function () {
        this.development = new Development();
    };
    developmentBuilder.prototype.developmentTextEditor = function () {
        this.development.parts.push('Текстовый редактор');
    };
    developmentBuilder.prototype.developmentFigma = function () {
        this.development.parts.push('Графический редактор Figma');
    };
    developmentBuilder.prototype.developmentChrome = function () {
        this.development.parts.push('Интернет-браузер Chrome');
    };
    developmentBuilder.prototype.getDevelopment = function () {
        var result = this.development;
        this.reset();
        return result;
    };
    return developmentBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.softwareDevelopment = function () {
        this.builder.developmentTextEditor();
    };
    Director.prototype.webDevelopment = function () {
        this.builder.developmentTextEditor();
        this.builder.developmentFigma();
        this.builder.developmentChrome();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new developmentBuilder();
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
var director = new Director();
clientCode(director);
