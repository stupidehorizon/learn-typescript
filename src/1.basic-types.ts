/** 布尔值 */
const isDone : boolean = true;

/** 字符串 */
const str : string = '12';

/** 数字 */
let num : number = 1;

/** 数组 */
const arr : number[] = [1,2,3];
const arr1 : Array<number> = [1,2,3];

/** 元组 */
let x:[number, string] = [1, '2'];
// x[2] = 3;

/** 枚举 */
// const m : enum = {
//   Orange,
//   Blue
// }
enum Color {
  Orange,
  Blue,
  Green
};

// 枚举值也可以用字符串来声明
// enum Size {
//   Blue ,
//   Big = 'big',
//   Green = 3, // 删掉这个 3 试试
//   Yello
// };

// let c : number = Color.Orange;
let c : Color = Color.Orange;
let orange : string = Color[0];

/** Any */
let y : any = '123';
y = 1;
y = [];

/** undefined */
let undef : undefined = undefined;
// undef = null;

/** null */
let nul : null = null;
// nul = undefined;

/** void */
const func = () : void => {};
function add() : void {}

/** never */
// never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式
function err() : never {
  throw(new Error());
}

function fail() : never {
  return err()
}

// function empt() : never {

// }
// const arrow = () : never => { }

/** 对象 */
let o : object;
o = {};
