/**todo Проработай UML lbfuhfve**/
abstract class Component {
    protected parent: Component;

    public setParent(parent: Component) {
        this.parent = parent;
    }

    public add(component: Component): void { }

    public remove(component: Component): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}


class Leaf extends Component {
    public operation(): string {
        return 'Лист';
    }
}

class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Ветка(${results.join('+')})`;
    }
}

function clientCode(component: Component) {
    console.log(`Дерево: ${component.operation()}`);
}


const tree = new Composite();
const leaf = new Leaf();
tree.add(leaf);
console.log('Наступила весна и спящее семечко проснулось');
clientCode(tree);
console.log('');

const branch1 = new Composite();
const branch2 = new Composite();
const branch3 = new Composite();
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


