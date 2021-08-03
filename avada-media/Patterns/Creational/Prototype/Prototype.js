var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.component = Object.create(this.bodyType);
        clone.skills = __assign(__assign({}, this.skills), { run: __assign({}, this) });
        return clone;
    };
    return Prototype;
}());
var twinSkills = /** @class */ (function () {
    function twinSkills(run) {
        this.run = run;
    }
    return twinSkills;
}());
var Body = /** @class */ (function () {
    function Body() {
        this.height = 175;
        this.weight = 75;
        this.waist = 64;
        this.chest = 95;
        this.shouldersBack = 34;
    }
    return Body;
}());
function clientCode() {
    var Alex = new Prototype();
    Alex.hairColor = "Blue";
    Alex.bodyType = new Body();
    Alex.skills = new twinSkills(Alex);
    var Piter = Alex.clone();
    if (Alex.hairColor === Piter.hairColor) {
        console.log('У близнецов одинаковый цвет волос!');
    }
    else {
        console.log('Странно у близнецов разный чвет волос!');
    }
    if (Alex.bodyType === Piter.bodyType) {
        console.log('У близнецов одинаковое телосложение!');
    }
    else {
        console.log('Странно у близнецов разное телосложение!');
    }
    if (Alex.skills === Piter.skills) {
        console.log('У близнецов разные умения!');
    }
    else {
        console.log('У близнецов похожые умения!');
    }
    if (Alex.skills.run === Piter.skills.run) {
        console.log('Но Питер бегает лучше!');
    }
    else {
        console.log('Но Алекс бегает лучше!');
    }
}
clientCode();
