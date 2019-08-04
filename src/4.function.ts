/**
 * 1. 基本使用
 */
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

/**
 * 2. 书写完整函数类型
 */
let myAdd2: (x:number, y:number) => number = function(x, y) { return x + y; };

/**
 * 3. 可选参数
 */
let myAdd3: (x:number, y?:number) => number =
      function(x, y) { return y ? x + y : x; };

myAdd3(1, 2);

/**
 * 4. 默认参数
 */

let myAdd4: (x:number, y?:number) => number =
function(x, y = 1) { return x + y; };

// console.log(myAdd4(1))

/**
 * 5. 剩余参数
 */
let myAdd5: (x:number, ...restOfNumber:number[]) => void =
function(x, ...restOfNumber) { console.log(x + '+' + restOfNumber.join('+')) };

myAdd5(1, 2, 3, 4, 5);