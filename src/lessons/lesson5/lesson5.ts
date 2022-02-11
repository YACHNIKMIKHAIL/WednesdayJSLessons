console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods done
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o done

// https://www.youtube.com/watch?v=xY-mwUzDjsk done

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    // greeting: () => string
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32,
    // greeting() {
    //     return `My name is ${this.name}. I am ${this.age}`
    // }
}
function greeting() {
    //@ts-ignore
    return `My name is ${this.name}. I am ${this.age}`
}
//@ts-ignore
someObj.greeting=greeting
//@ts-ignore
console.log(someObj.greeting())
// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
type CounterType = {
    count: number
    getCurrentCount: () => number
    increment: () => void
    decrement: () => void
    setCurrentCount: (n: number) => any
    restCurrentCount: () => void
}
let counter: CounterType = {
    count: 0,
    getCurrentCount: function () {
        return this.count
    },
    increment: function () {
        this.count++
        return this
    },
    decrement: function () {
        this.count--
        return this
    },
    setCurrentCount: function (n: number) {
        this.count = n
        return this
    },
    restCurrentCount: function () {
        this.count = 0
    }
}
counter.setCurrentCount(10)
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getCurrentCount())


console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

const myFirstConstructorFunc = (name: string, age: number) => {
    return {
        name, age, greeting() {
            return `My name is ${this.name}. I am ${this.age}`
        }
    }
}
console.log(myFirstConstructorFunc('hfued', 50))


function MyFirstConstructorFunc(name: any, age: any) {
    // @ts-ignore
    this.name = name
    // @ts-ignore
    this.age = age
}
// @ts-ignore

MyFirstConstructorFunc.prototype.greeting = someObj.greeting
// @ts-ignore

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

type OneType = { name: string }
let One: OneType = {name: 'One'};
let Two = {
    name: 'Two',
    sayHello() {
        console.log(`Hello, my name is ${this.name}`)
    }
};


Two.sayHello.bind(One)()
let hhhh = Two.sayHello.bind(One)


console.log(hhhh())


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

type helperObjType = {
    name: string
    age: number
    changeName: (name: string) => void
    setAge: (age: number) => void
    greeting: () => void
}
let helperObj: helperObjType = {
    name: '',
    age: 0,
    changeName: function (name: string) {
        this.name = name
    },
    setAge: function (age: number) {
        this.age = age
    },
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}


// const helperObj: any = {
//     name: '',
//     age: 0,
//     changeName(name: string) {
//         this.name = name
//         return this
//     },
//     setAge(age: number) {
//         this.age = age
//         return this
//     },
//     greeting:
//     Two.sayHello
// }

helperObj.changeName('ggg')
console.log(helperObj)
helperObj.setAge(99)
console.log(helperObj)
console.log(helperObj.greeting())
// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};
const bindNumber = (func: Function, num: number) => {
    return func.bind({}, num)
}
let tata = bindNumber(sumTwoNumbers, 2)
console.log(tata(3, 9, 10))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two


function atata(One: OneType, helperObj: helperObjType) {
    return function (nameN: string) {
        return helperObj.changeName.bind(One, nameN)
    }
}

let hbca = atata(One, helperObj)
hbca('GGGGGGGGG')()
console.log(One)

let change = helperObj.setAge.bind(Two, 30)
change()
console.log(Two)

//@ts-ignore
One.hi = helperObj.greeting.bind(Two)
//@ts-ignore
console.log(One.hi)

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};