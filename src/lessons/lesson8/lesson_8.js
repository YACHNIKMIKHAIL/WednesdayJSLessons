// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0] =>f
// const str = 'fgfggg'
// console.log(str[0])

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
// function getStr() {
//     return [].slice.call(arguments, 1).join(arguments[0])
// }

// console.log(getStr('*', '1', 'b', '1c'))
// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

// var sum = 0;
//
// function getSumRec(obj) {
//     sum += obj.valueNode;
//     if (obj.next != null) {
//         for (var i = 0; i < obj.next.length; i++) {
//             getSumRec(obj.next[i]);
//         }
//     }
//
//     return sum;
// }
//
// function getSumLoop(obj) {
//     var arr = [obj],
//         sum = 0,
//         current;
//
//     while (arr.length > 0) {
//         current = arr.shift();
//         sum += current.valueNode;
//
//         if (current.next != null) {
//             for (var i = 0; i < current.next.length; i++) {
//                 arr.push(current.next[i]);
//             }
//         }
//     }
//
//     return sum;
// }
//
// console.log(getSumRec(tree))
// console.log(getSumLoop(tree))

// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
//     this.name = name;
//     this.author = author;
//     return this;
// }
//
// function Foo(Cclass, name, author) {
//     return Cclass.call({}, name, author);
// }
//
//
// // function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function f(a, b) {
    if (b !== undefined) {
        return a + b;
    } else {
        return function (b) {
            return a + b;
        }
    }
}

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

function foo(value) {
    var acc = value;

    function addNext(next) {
        acc += next;
        return addNext;
    }

    addNext.toString = addNext.valueOf = function () {
        return acc;
    }
    return addNext;
}

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function one(arg) {
    return 1 + (arg || 0);
}

function two(arg) {
    return 2 + (arg || 0);
}

function five(arg) {
    return 5 + (arg || 0);
}

function seven(arg) {
    return 7 + (arg || 0);
}

function plus(arg) {
    return arg;
}

function minus(arg) {
    return -arg;
}

// console.log(seven(plus(one())))
// console.log(five(minus(two())))
// Task 10
// Реализовать функцию сортировки массива пузырьком
var m = [1, 7, 5, 13, 8],
    count = m.length - 1,
    max;
for (var i = 0; i < count; i++) {
    for (var j = 0; j < count - i; j++) {
        if (m[j] > m[j + 1]) {
            max = m[j];
            m[j] = m[j + 1];
            m[j + 1] = max;
        }
    }
}

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
function validBraces(str) {

    var arrOpenSymbols = [],
        result = false,
        countOpenSymbols;
    if (str.length > 0) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
                arrOpenSymbols.push(str[i]);
            } else {
                countOpenSymbols = arrOpenSymbols.length;
                if ((str[i] === '}' && arrOpenSymbols[(countOpenSymbols - 1)] === '{') ||
                    (str[i] === ']' && arrOpenSymbols[(countOpenSymbols - 1)] === '[') ||
                    (str[i] === ')' && arrOpenSymbols[(countOpenSymbols - 1)] === '(')
                ) {
                    arrOpenSymbols.pop();
                }
            }
        }

        if (arrOpenSymbols.length === 0) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

// console.log('');
// console.log(validBraces('()'));
// console.log(validBraces('[)'));
// console.log(validBraces('{}[]()'));
// console.log(validBraces('([{}])'));
// console.log(validBraces('())({}}{()][]['));
// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function uniqueI(arr) {
    return arr.filter((item, index, self) => (self.indexOf(item) === index));
}

function uniqueII(arr) {
    const res = {};

    arr.forEach((item) => {
        res[item] = '';
    });

    return Object.keys(res).map(item => Number(item));
}

// console.log(uniqueI([1, 1, 1, 2]))
// console.log(uniqueII([1, 1, 1, 2]))
// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
function func(arr) {
    return arr
        .filter(item => item !== null)
        .map(item => item * 2);
}


// console.log(func([1, 2, null, 7, 8, null, 3]))
// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};

function getTreeValuesI(tree) {
    let values = [tree.value];

    if (Array.isArray(tree.children)) {
        tree.children.forEach(item => values = values.concat(getTreeValuesI(item)));
    }

    return values;
}

function getTreeValuesII(tree) {
    const tmpTree = [tree];
    const res = [];
    let current;

    while (tmpTree.length > 0) {
        current = tmpTree.shift();
        res.push(current.value);

        if (current.children) {
            current.children.forEach(item => tmpTree.push(item));
        }
    }

    return res
}

console.log(getTreeValuesI(tree2))
console.log(getTreeValuesII(tree2))
// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));