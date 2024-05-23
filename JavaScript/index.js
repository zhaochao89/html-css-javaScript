//开启严格模式：严格模式是一种不同的JavaScript解析和执行模型，ES3的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。
// 'use strict'; //一个预处理指令


function test() {
    // 也可以单独指定一个函数在严格模式下执行，只需要把这个预处理指令放到函数体的开头即可。
    // 'use strict';
    alert('test');
    // var关键字在ECMAScript所有版本中都能使用，但是let和const只在ECMAScript6及更晚版本中才有。
    var a = 1;
    let b = 2;
    const c = 3;

    // 不会报错，因为var声明的变量会被提升到函数顶部。
    console.log(d);
    var d = 4;

    /* 打印的是：0,1,2,3,4，使用let声明迭代变量时，JavaScript引擎在后台会为每个迭代循环声明一个新的迭代变量。
    每个setTimeout引用的都是不同的变量实例，所以console.log输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。
    */
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            // console.log(i);
        }, 1000);
    }
    /*打印的是：5,5,5,5,5，因为退出循环时，迭代变量保存的是导致循环退出的值：5。
    在之后执行超时逻辑时，所有的i都是同一个变量，因而输出的都是同一个最终值。
    */
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            // console.log(i);
        }, 1000);
    }
    /*const和let基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，并且尝试修改const声明的变量会导致运行时错误。
    如果const声明的变量引用的是一个对象，那么修改这个对象内部的属性是允许的。
    */
    let tt;
    const dd = 111;
    tt = '222';
    // dd = 333;


    /**
     * 对未声明的变量和声明未初始化的变量调用typeof都会返回undefined。
     */
    let ff;
    function show() {
        console.log('show');
    }
    console.log(typeof (dd));
    console.log(typeof (tt));
    console.log(typeof ff);
    console.log(typeof gg);
    console.log(typeof (show));

    console.log(Number('-123'));

    // Symbol
    const sym = Symbol('description');
    const obj = {
        [sym]: 'This is a unique property.'
    }
    console.log(sym);
    console.log(obj[sym]);

    /**
     *  Object类型
     */
    let o = new Object();
    console.log(o, o.toString, o.toLocaleString, o.valueOf());

    let num = -18;
    console.log(num.toString(2));

    //按位非：最终效果是对数值取反并减1，按位非得速度快得多，这是因为位操作实际是在数值的底层表示上完成的。
    let num1 = 25;
    let num2 = ~num1;
    console.log(num2, num2.toString(2));
    //左移
    let oldNum1 = 2;
    let newNum2 = oldNum1 << 5;
    console.log(newNum2);
    //右移
    let oldNum3 = 64;
    let newNum3 = oldNum3 >> 5;
    console.log(newNum3);

    //乘性操作符
    let num3 = Infinity;
    let num4 = 4;
    console.log(num3 % num4);
    console.log(num4 % 0);
    console.log(num4 % Infinity);

    //指数操作符
    console.log(Math.pow(3, 2));
    console.log(3 ** 2);

    // for-in不能保证返回对象属性的顺序。
    for (const propName in window) {
        console.log(propName);
    }
    //for-of会按照可迭代对象的next()方法产生值的顺序迭代元素。
    for (const el of [2, 4, 6, 8]) {
        console.log(el);
    }
    //标签语句
    frist: for (let i = 0; i < 10; i++) {
        console.log('frist', i);
        second: for (let j = 11; j < 20; j++) {
            console.log('second', j);
            if (i == 8) {
                break frist; //跳出frist标签语句
            }
        }
    }

    let p = new Person();
    p.name = '张三';
    p.age = 18;
    p.sex = '男';
    //with语句的用途是将代码作用域设置为特定的对象，严格模式不允许使用with语句，否则会抛出错误。
    with (p) {
        console.log(name);
        console.log(age);
        console.log(sex);
    }
}
//定义一个Person类，包括姓名，性别，年龄属性
class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    //定义一个方法，用来打印个人信息
    printInfo() {
        console.log(`姓名：${this.name}，性别：${this.sex}，年龄：${this.age}`);
    }
}