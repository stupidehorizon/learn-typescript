# 学习 TypeScript

本仓库仅用于我学习 TypeScript 使用，记录了我学习的过程，方便后期查看。

## 运行

使用了 parcel 作为构建工具，你可以需要先安装 parcel 'yarn global add parcel'。

```bash
yarn start
```

### 基础类型

1. 字符串: string
2. 数字: number
3. 布尔值：boolean
4. 数组：number[], Array[number]
5. 元组：[number, string]
6. 枚举: enum
7. undefied
8. null
9. any
10. void
11. never
12. 对象：object

### 接口

TypeScript 的核心原则之一就是对值所具有的结构进行类型检查，它有时也被称做“鸭式辨型法”。

1. 鸭式辨型法，只是检查对象的形状
2. 所用用到的属性都应该定义
3. readonly 和 const 的区别是一个前者用于对象属性后者用于变量声明
4. 声明函数类型
5. 声明可索引类型
6. 类类型
7. interface 继承
8. 混合类型
9. 接口继承类

### 类

类修饰符
1. public: 所有人可见（默认）。
2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用。
3. protected: 只能在类或类的子类中调用。
4. readonly: 只读。
5. static: 静态属性，可以被类或类的子类本身调用。

6. abstract：抽象类，不能被实例化，用于基类

### 函数

nothing need to record

### 泛型 generic

使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

