//let

{
    console.log('1st example :');

    {
        let a = 10;
        var b = 1;
        console.log(a);
    }
    console.log(b);
}

//var, for

{
    console.log('2nd example :');

    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6]()
}

//let, for

{
    console.log('3rd example :');

    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6]();
}

//循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域

{
    console.log('4th example :');

    for (let i = 0; i < 3; i++) {
        let i = 'abc';
        console.log(i);
    }
}

//ES6的块级作用域

{
    console.log('5th example :');

    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}

// 函数声明ES5版本

{
    console.log('6th example :');

    function f() {
        console.log('I am outside!');
    }

    (function () {
        function f() {
            console.log('I am inside!');
        }

        f();
    }());
}

// 函数声明ES6版本

{
    console.log('7th example :');

    function f() {
        console.log('I am outside!');
    }

    {
        function f() {
            console.log('I am inside!');
        }

        f();
    }
}

//const对象可添加属性

{
    console.log('8th example :');

    const foo = {};
    foo.prop = 123;
    console.log(foo.prop);
}

//const数组元素可增减

{
    console.log('9th example :');

    const a = [];
    a.push('Hello');
    a.length = 0;
    console.log(a);
}

