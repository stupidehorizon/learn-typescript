/** 1. 第一个接口 */
const printLable = (labelObj: {label: string}) => {
  console.log(labelObj.label);
  return labelObj.label;
}

const labelObejct = {
  label: '123'
};

const babelObejct1 = {
  babel: '456',
};

printLable(labelObejct);
// printLable(babelObejct1);

/** 2. 使用 interface 来描述接口 */
interface LabelObject {
  label: string;
};

const returenLable = (labelObejct: LabelObject) => {
  return labelObejct.label;
}

/** 3. 可选属性 */
interface Game {
  football?: string;
  baskball?: string;
};

const chooseGame = (gameObject: Game) => {
  if (gameObject.football) {
    return gameObject.football;
  }

  if (gameObject.baskball) {
    return gameObject.baskball;
  }

}

const games = {
  baskball: 'awesome',
  pingpong: '123'
};

const games2 = {
  pingpong: 'great',
}

chooseGame(games);
//  如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// chooseGame(games2);

/** 4. 字符串索引签名 */

interface UnknowProps {
  aaa?: string;
  // [propName: string] : string;
  // [propName: string] : string | undefined;
  [propName: string] : any;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

const getUnknowProp = (unknowProps: UnknowProps) => {
  if(unknowProps.color) {
    return unknowProps.color;
  }
  if(unknowProps.width) {
    return unknowProps.width;
  }
  if(unknowProps.propName) {
    return unknowProps.propName;
  }
};

getUnknowProp({c: '1', b: 1});

/** 5. 只读属性 */

interface ReadOnlyLabel {
  readonly label: string;
}

const a: ReadOnlyLabel = {
  label: 'xx'
};

// a.label = 'yy'

/** 6. 描述函数类型 */
interface SearchFunc {
  (source: string, subString: string): boolean;
};

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
// 参数名不需要保持一致，会按位置进行检查
let youSearch: SearchFunc
youSearch = function(sou, sub) {
  let result = sou.search(sub);
  return result > -1;
}

/** 7. 可索引类型 */
// 描述能够通过索引得到得类型


interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 支持两种数字索引和字符串索引
// 数字索引的返回值必须是字符串索引返回值类型的子类型。

class Animal {
  name: string = '1';
}
class Dog extends Animal {
  breed: string = '2';
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

/** 8. 类类型 */

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date):void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

/** 9. interface 继承 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

/** 10. 混合类型 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;

/** 11. 接口继承类 */