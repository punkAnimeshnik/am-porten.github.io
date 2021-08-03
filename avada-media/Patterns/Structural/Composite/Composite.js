var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**todo Проработай UML lbfuhfve**/
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return 'Лист';
    };
    return Leaf;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Composite.prototype.isComposite = function () {
        return true;
    };
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "\u0412\u0435\u0442\u043A\u0430(" + results.join('+') + ")";
    };
    return Composite;
}(Component));
function clientCode(component) {
    console.log("\u0414\u0435\u0440\u0435\u0432\u043E: " + component.operation());
}
var tree = new Composite();
var leaf = new Leaf();
tree.add(leaf);
console.log('Наступила весна и спящее семечко проснулось');
clientCode(tree);
console.log('');
var branch1 = new Composite();
var branch2 = new Composite();
var branch3 = new Composite();
branch1.add(leaf);
branch2.add(leaf);
branch2.add(leaf);
branch3.add(leaf);
branch3.add(leaf);
branch3.add(leaf);
tree.add(leaf);
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
console.log('Наступило лето и маленькое дервце разрасталось');
clientCode(tree);
console.log('');
tree.remove(leaf);
tree.remove(branch1);
tree.remove(branch2);
tree.remove(branch1);
branch1.remove(leaf);
branch2.remove(leaf);
branch3.remove(leaf);
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
console.log('Наступила осень и уже среднее дерво разраслось и начало желтеть и осыпаться');
clientCode(tree);
console.log('');
tree.remove(branch1);
tree.remove(branch2);
tree.remove(branch1);
tree.remove(leaf);
branch2.remove(leaf);
branch3.remove(leaf);
branch3.remove(leaf);
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
console.log('Наступила зима дерево осыпалось и уснуло до весны');
clientCode(tree);
console.log('');
