var RepkaIterator = /** @class */ (function () {
    function RepkaIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    RepkaIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    RepkaIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    RepkaIterator.prototype.key = function () {
        return this.position;
    };
    RepkaIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    RepkaIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return RepkaIterator;
}());
var RepkaCollection = /** @class */ (function () {
    function RepkaCollection() {
        this.items = [];
    }
    RepkaCollection.prototype.getItems = function () {
        return this.items;
    };
    RepkaCollection.prototype.getCount = function () {
        return this.items.length;
    };
    RepkaCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    RepkaCollection.prototype.getIterator = function () {
        return new RepkaIterator(this);
    };
    RepkaCollection.prototype.getReverseIterator = function () {
        return new RepkaIterator(this, true);
    };
    return RepkaCollection;
}());
var collection = new RepkaCollection();
collection.addItem('Мышка');
collection.addItem('Кошка');
collection.addItem('Жучка');
collection.addItem('Внучка');
collection.addItem('Бабка');
collection.addItem('Дед');
var iterator = collection.getIterator();
console.log('Порядок созданий:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log('');
console.log('Странно разве не наоборот так:');
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
