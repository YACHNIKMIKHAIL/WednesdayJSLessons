import {isNumber, log} from "util";

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes done
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d done
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w done
// https://www.youtube.com/watch?v=uLY9GXGMXaA done

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    secondName: string
    numberOfGroop: number
    scores: number[]
    bestScore: number
}

class Student implements IStudent {
    name: string
    secondName: string
    numberOfGroop: number
    scores: number[]
    bestScore: number

    constructor(name: string, secondName: string, numberOfGroop: number, scores: number[]) {
        this.name = name
        this.secondName = secondName
        this.numberOfGroop = numberOfGroop
        this.scores = scores
        this.bestScore = this.scores.reduce((sum, mark) => sum + mark) / this.scores.length;
    }

    private static sortBestScore(Student1: IStudent, Student2: IStudent) {
        if (Student1.bestScore > Student2.bestScore) {
            return 1
        } else if (Student1.bestScore < Student2.bestScore) {
            return -1
        } else {
            return 0
        }
    }

    static sortStudents(students: IStudent[]) {
        // return [...students].sort(this.sortBestScore)
        const temp = [...students];
        return temp.sort(this.sortBestScore);
    }


    private static sortScoreThanOnlyFour(scores: number[]) {
        return scores.every(score => score === 4)
    }

    private static sortScoreThanOnlyFive(scores: number[]) {
        return scores.every(score => score === 5)
    }


    private static sortBestStudents(students: IStudent[]
    ) {
        let res = students.filter(f => f.bestScore === 4
            || f.bestScore === 5)
        return res
    }

    static showStudents(students: IStudent[]) {
        this.sortBestStudents(students).forEach(stu => {
            console.log(`Student ${stu.name} from ${stu.numberOfGroop}`)
        })
    }
}

//let summ = [student1, student2, student3].sort((a,b) => b.score.reduce((e, f) => e + f, 0) - a.score.reduce((c, d) => c + d, 0))
let students = [];
students.push(new Student('Eugene', 'Sheuchuk', 1, [4, 4, 4, 4, 4]));
students.push(new Student('Vlad', 'Bizin', 2, [5, 5, 5, 5, 5]));
students.push(new Student('Hanna', 'Kicel', 3, [4, 5, 4, 5, 5]));
students.push(new Student('Nick', 'Stone', 4, [3, 4, 3, 5, 3]));
students.push(new Student('Alex', 'Page', 5, [3, 4, 3, 3, 4]));
students.push(new Student('Test', 'Testovich', 6, [3, 5, 3, 5]));

console.log(students);

console.log(Student.sortStudents(students));
Student.showStudents(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class Two {
    constructor(public s = 'ddd', public f = 999) {
        this.s = s
        this.f = f
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface IClock {
    sec: number | undefined;
    min: number | undefined;
    hr: number | undefined;
    setHr: (hr: number) => void;
    setMin: (min: number) => void;
    setSec: (sec: number) => void;
}

class Clock implements IClock {
    sec: number | undefined
    min: number | undefined
    hr: number | undefined

    constructor(sec: number, min: number, hr: number) {
        this.sec = this.lookForSec(sec)
        this.min = this.lookForMin(min)
        this.hr = this.lookForHr(hr)
    }

    private lookForSec(sec: number) {
        if (sec > 0 && sec < 61) {
            return sec
        }
    }

    private lookForMin(min: number) {
        if (min > 0 && min < 61) {
            return min
        }
    }

    private lookForHr(hr: number) {
        if (hr > 0 && hr < 25) {
            return hr
        }
    }

    setSec(s: number) {
        this.sec = this.lookForSec(s)
    }

    setMin(m: number) {
        this.min = this.lookForMin(m)
    }

    setHr(h: number) {
        this.hr = this.lookForHr(h)
    }

    showTime() {
        return this.hr + ' ' + this.min + ' ' + this.sec
    }

}
//
// class Clock {
//     private date: Date
//     private hours: number
//     private minutes: number
//     private seconds: number
//
//     constructor() {
//         this.date = new Date()
//         this.hours = this.date.getHours()
//         this.minutes = this.date.getMinutes()
//         this.seconds = this.date.getSeconds()
//     }
//
//     private translate(method: number) {
//         if (method < 10) {
//             return '0' + method
//         }
//         return method
//     }
//
//     public setHours(hours: number, minutes: number
//     public setHours(hours: number, minutes: number, seconds: number) {
//         this.hours = hours
//         this.minutes = minutes
//         this.seconds = seconds
//     }
//
//     public getTime() {
//         return `${this.translate(this.hours)}:${this.translate(this.minutes)}:${this.translate(this.seconds)}`
//     }
// }

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};