/**
 * 1. generic hello world
 */
function identity<T>(arg: T): T {
  return arg;
}

identity<string>('123');
// 也可以忽略类型参数，编译器会根据传入的参数自动地帮助我们确定T的类型
identity([1]);

/**
 * 2. 使用泛型变量
 */
function identity2<T>(arg: T): T {
  console.log(arg.length)
  return arg;
}

function identity22<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}

/**
 * 3. 泛型类
 * 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

/**
 * 4. 泛型约束
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity(3); // error: 没有 length 属性
loggingIdentity({length: 1});

/**
 * 5. 在泛型约束中使用类型参数
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x5 = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x5, "a"); // okay
getProperty(x5, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.