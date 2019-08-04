/** 1. 基本使用 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/** 2. 修饰符 private */
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    getName() {
        return this.name;
    }
}

// new Animal2("Cat").name; // 错误: 'name' 是私有的.

/** 3. 修饰符 protected */
/**
 * 和 private 很像但是可以在类的子类中调用
 */
class Animal3 {
    protected name: string;
    constructor(theName: string) { this.name = theName; }
    getName() {
        console.log(this.name);
    }
}

class Cat3 extends Animal3 {
    constructor(theName: string) {
        super(theName);
    }
}

// new Cat("xixi").name; // 错误: 'name' 是私有的.
new Cat3("xixi").getName();

/** 4. 修饰符 readonly */
class Animal4 {
    readonly name: string;
    constructor(theName: string) { this.name = theName; }
    getName() {
        console.log(this.name);
    }
}

class Cat4 extends Animal4 {
    constructor(theName: string) {
        super(theName);
    }
}

new Cat4("xixi").name;
// new Cat4("xixi").name = 'guagua'; // readonly


/**
 * 5. 修饰符 static
 * 静态属性，可以被类或类的子类本身调用。
 */

 /**
  * 6. 抽象类 abstract
  * 不能被实例化，用于基类
  */
abstract class Animal6 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

// 非抽象类“Cat6”不会实现继承自“Animal6”类的抽象成员“makeSound”
class Cat6 extends Animal6 {
    makeSound() {
        console.log('miaomiao');
    }
}


