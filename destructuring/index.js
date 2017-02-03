//数组的解构赋值
//基本用法

{
    console.log('1st example :');

    let [a, b, c] = [1, 2, 3];
    console.log(a,b,c);

    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo,bar,baz);

    let [ , , third] = ["foo", "bar", "baz"];
    console.log(third);

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(head,tail);

    let [x, y, ...z] = ['a'];
    console.log(x,y,z);
}

//默认值

{
    console.log('2nd example :');

    let [foo = true] = [];
    console.log(foo);

    let [x, y = 'b'] = ['a', undefined];
    console.log(x,y);

    let [j, k = 'b'] = ['a', 1];
    console.log(j,k);
}

//如果一个数组成员不严格等于undefined，默认值是不会生效的

{
    console.log('3th example :');

    let [x = 1] = [null];
    console.log(x);
}

//如果默认值是一个表达式，那么这个表达式是惰性求值的

{
    console.log('4th example :');

    function f() {
        console.log('aaa');
    }
    let [x = f()] = [1];
    console.log(x);
}

//对象的解构赋值

{
    console.log('5th example :');

    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    console.log(foo,bar);
}

//如果变量名与属性名不一致

{
    console.log('6th example :');

    var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
    console.log(baz);
}

//解构也可以用于嵌套结构的对象

{
    console.log('7th example :');

    let obj = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };
    let { p: [x, { y }] } = obj;
    console.log(x,y);
}

//字符串的解构赋值

{
    console.log('8th example :');

    const [a, b, c, d, e] = 'hello';
    console.log(a, b, c, d, e);
}

//length属性

{
    console.log('9th example :');

    let {length : len} = 'hello';
    console.log(len);
}

//数值和布尔值的解构赋值

{
    console.log('10th example :');

    let {toString: s} = 123;
    console.log(s === Number.prototype.toString);

    let {toString: t} = true;
    console.log(t === Boolean.prototype.toString);
}

//函数参数的解构赋值
//数组

{
    console.log('11th example :');

    function add([x, y]){
        return x + y;
    }
    console.log(add([1, 2]));
}

//对象

{
    console.log('12th example :');

    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }

    console.log(move({x: 3, y: 8}));
    console.log(move({x: 3}));
    console.log(move({}));
    console.log(move());
}