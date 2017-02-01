//let

console.log('1st example :');

{
    let a = 10;
    var b = 1;
    console.log(a);
}
console.log(b);

//var, for

console.log('2nd example :');

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]()

//let, for

console.log('3rd example :');

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

//循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域

console.log('4th example :');

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

