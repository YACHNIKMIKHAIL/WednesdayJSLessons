console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/ done

//// Closure
// https://learn.javascript.ru/closure done
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures done
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898 done
// https://www.youtube.com/watch?v=pahO5XjnfLA ?

//// Сurrying
// https://learn.javascript.ru/currying-partials done!
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827 done

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/ done

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    return function (b: number) {
        return a + b
    }
}

// console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 1
    return function incCounter() {
        return count++
    }
}

const counter = makeCounter()
// console.log(counter())
// console.log(counter())
const counter2 = makeCounter()
// console.log(counter2())
// console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function superCounter(n: number) {
    let count = n
    return {
        increase: function increase() {
            return count += 1
        },
        decrease: function decrease() {
            return count -= 1
        },
        reset: function reset() {
            return count = 0
        },
        set: function set() {
            return count
        }
    }
}

let inc = superCounter(7).increase()
// console.log(inc)
let dec = superCounter(7).decrease()
// console.log(dec)
let res = superCounter(7).reset()
// console.log(res)
let set = superCounter(18).set()
// console.log(set)

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number) {
    if (num <= 0) {
        return 0;
    }
    if (num === 1) {
        return (num: number) => num;
    }
    let res: Array<number> = [];

    function helper(...args: Array<number>) {
        res = [...res, ...args];
        if (res.length >= num) {
            res.length = num;
            return res.reduce((acc, el) => acc + el)
        } else {
            return helper
        }
    }

    return helper
}


// console.log(superSum(0))
//@ts-ignore
// console.log(superSum(3)(2)(5)(3))
//@ts-ignore
// console.log(superSum(3)(2)(5, 3))
//@ts-ignore
// console.log(superSum(3)(2, 5)(3))
//@ts-ignore
// console.log(superSum(3)(2, 5)(3))
//@ts-ignore
// console.log(superSum(3)(2, 5)(3, 9))


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Вычислить сумму чисел до данного
//sumTo(1) = 1
//sumTo(2) = 2 + 1 = 3
//sumTo(3) = 3 + 2 + 1 = 6
//sumTo(4) = 4 + 3 + 2 + 1 = 10
//sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(x: number): number {
    if (x === 1) {
        return x;
    } else {
        return x + sumTo(x - 1);
    }
}

// console.log(sumTo(4))
// console.log(sumTo(100))

function sumTo2(x: number) {
    let result = x
    for (let i = 0; i < x; i++) {
        result += i
    }
    return result
}

// console.log(sumTo2(4))
// console.log(sumTo2(100))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr.flat(3);
// console.log(arr.flat(3))

const flatFunc = (arr: Array<any>): Array<number> => {
    return arr.reduce((acc: Array<any>, el: number) => acc.concat(el), [])
}
// console.log(flatFunc([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

function flatFunc2(array: Array<any & Array<any>>): Array<any> {
    let flattend: Array<any> = [];
    (function flat(array) {
        array.forEach(function (el: Array<any>) {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
        });
    })(array);
    return flattend;
}

let arr2 = ['adfsr', 'hfbe', ['hcn', 'hfbe', ['adfsr', 'hfbe', ['hcn', 'hfbe', ['adfsr', 'hfbe']]]]];
// console.log(flatFunc2(arr2))


// Для развёртывания многомерных массивов используем рекурсию, reduce и concat
const arr3 = [1, 2, [3, 4, [5, 6]]];

function flatFunc3(arr: any[], d = 1): [any] {
    return d > 0 ? arr.reduce((acc, val): any => acc.concat(Array.isArray(val) ? flatFunc3(val, d - 1) : val), [])
        : arr.slice();
};

// console.log(flatFunc3(arr3, 2))

// [1, 2, 3, 4, 5, 6]
// just a plug

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
//alert( factorial(5) ); // 120

function factorial(n: number): number {
    if (n === 1) return n
    return n * factorial(n - 1)
}

// console.log(factorial(5))
// console.log(factorial(10))


//Числа Фибоначчи
//Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть,
//    следующее число получается как сумма двух предыдущих.
//    Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//    Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//    Пример работы:
//    function fib(n) { /* ваш код */ }
//alert(fib(3)); // 2
//alert(fib(7)); // 13
//alert(fib(77)); // 5527939700884757
function fib(n: number): number {
    if (n === 1 || n === 2) return 1
    return fib(n - 1) + fib(n - 2)
}

function fib2(n: number): number {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// console.log(fib(3))
// console.log(fib(7))
// console.log(fib2(77))


//Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: any): any {
    if (!list) return;
    console.log(list.value);
    return printList(list.next)
}

// console.log(printList(list))

function printListReverse(list: any): any {
    if (list.next) {
        printListReverse(list.next)
    }
    // console.log(list.value)

}

// console.log(printListReverse(list))

function printListLoopReverse(list: any): any {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

// console.log(printListLoopReverse(list))


//Армия функций

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () { // функция shooter
            // alert(i+1); // должна выводить порядковый номер
            // console.log(i+1);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[1](); // и у 5-го стрелка тоже будет номер 10
army[2](); // и у 5-го стрелка тоже будет номер 10
army[3](); // и у 5-го стрелка тоже будет номер 10
army[4](); // и у 5-го стрелка тоже будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
army[6](); // и у 5-го стрелка тоже будет номер 10
army[7](); // и у 5-го стрелка тоже будет номер 10
army[8](); // и у 5-го стрелка тоже будет номер 10
army[9](); // и у 5-го стрелка тоже будет номер 10


export default () => {
};

