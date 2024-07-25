/**
 * 函数参数的传递是按值传递，不是按引用传递。ECMAScript中函数的参数是局部变量。
 * JavaScript是使用垃圾回收的语言，也就是说执行环境负责在代码执行时管理内存。
 * 浏览器标记未使用变了的两种标记策略：标记清理和引用计数。JavaScript引擎不再使用引用计数这种回收策略了。
 *
 */
function test() {
    let p1 = new Object();
    setName1(p1);
    console.log(p1.name);

    let p2 = new Object();
    setName2(p2);
    console.log(p2.name);

    testTypeof();
    testInstanceof();
    console.log(buildUrl());
}

function setName1(obj) {
    obj.name = 'Nicholas';
}

function setName2(obj) {
    obj.name = 'Nicholas';
    obj = new Object();
    obj.name = 'Greg';
}
//typeof操作符最适合用来判断一个变量是否为原始类型。更确切地说，它是判断一个变量是否为字符串、数值、布尔值或undefined的最好方式。如果值是对象或null，那么typeof返回"object"。
function testTypeof() {
    let s = "Nicholas";
    let b = true;
    let i = 22;
    let u;
    let n = null;
    let o = new Object();
    console.log(typeof s); // string
    console.log(typeof b); // boolean
    console.log(typeof i); // number
    console.log(typeof u); // undefined
    console.log(typeof n); // object
    console.log(typeof o); // object
}
//按照定义，所有引用值都是Object的实例，因此通过instanceof操作符检测任何引用值和Object构造函数都会返回true。类似地，如果用instanceof检测原始值，则始终会返回false，因为原始值不是对象。
function testInstanceof() {
    let person = new Object();
    let colors = new Array();
    let pattern = new RegExp();
    console.log(person instanceof Object);  //变量person是Object吗？
    console.log(colors instanceof Object);   //变量colors是Array吗？
    console.log(pattern instanceof RegExp); //变量pattern是RegExp吗？
}
//作用域链增强
function buildUrl() {
    let qs = "?debug=true";
    //with语句会向作用域链前端添加指定的对象。这里with语句将location对象作为上下文，因此location会被添加到作用域链的前端。
    with (location) {
        //这里用let时，大括号外面是访问不到url的，会报错
        // let url = href + qs;
        // 用var时变量提升了，大括号外面可以访问的到
        var url = href + qs; //href实际引用的是location.href属性
    }

    let p = new Person1('张三');
    with (p) {
        name = '李四';
        sayName();
    }
    return url;
}

class Person1 {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
