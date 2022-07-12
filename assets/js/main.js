/*
1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
при вызове которого через 3 секунды в консоль выведется сообщение, записанное в свойстве message.
Начальный код:

let coffeeMachine = {
   message: 'Your coffee is ready!',
   start: function() {
     // write your code here
   },
}

Результат:
coffeeMachine.start(); // 'Your coffee is ready!'

Создайте объект teaPlease со свойством message: 'Wanna some tea instead of coffee?'. Обновите методу start() контекст так,
чтобы он выводил сообщение с нового объекта.

coffeeMachine.start(); // 'Wanna some tea instead of coffee?'

*/

const coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        setTimeout(()=>{
            console.log(this.message);
        }, 3000);
    },
};

const teaPlease = {
    message: 'Wanna some tea instead of coffee?',
};

coffeeMachine.start = coffeeMachine.start.bind(teaPlease);

coffeeMachine.start();


/*
2) Напишите функцию concatStr(), которая соединяет две строки,
разделенные каким-то символом: разделитель и строки передаются в параметрах функции.
Используя привязку аргументов с помощью bind, создайте новую функцию hello(),
которая которая выводит приветствие тому, кто передан в ее параметре:

let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'
...
let finalResult = hello('Matt') // 'Hello Matt'
let finalResult = hello('John') // 'Hello John'
*/

function concatStr (great = 'Hello', separator = ' ', name = this.name) {
    return great + separator + name
};

let checkConcat = concatStr('Hello', ' ', 'Matt');

const user1 = {
    name: 'Matt',
};

const user2 = {
    name: 'John',
};

const hello = concatStr.bind(user2);

console.log(hello());


/*
3) Напишите функцию showNumbers(), которая последовательно выводит в консоль числа
в заданном диапазоне, с заданным интервалом (все данные должны передаваться как параметры функции).

tips: для реализации используйте функцию setInterval()

showNumbers(5, 10, 500); // 5 6 7 8 9 10

upd: Решите эту задачу с использованием рекурсивного setTimeout().
*/

function showNumbersInterval (start, end, interval) {
    const idInt = setInterval(()=>{
        start > end ? clearInterval(idInt) : console.log(start++);
    }, interval);
};

function showNumbersTimeOut (start, end, interval) {
    setTimeout(function timeRun () {
        if (start <= end) {
            console.log(start++);
            setTimeout(timeRun, interval);
        }
    }, interval);
};

//showNumbersInterval(5, 10, 500);

//showNumbersTimeOut(5, 10, 500);


/*
4) Какой результат выполнения будет у данного кода? Объяснить почему.

function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3));

*/
//Описание кода
/*
В данном примере мы используем замыкание

При обьявлении let addOne = addBase(1) в переменной addOne мы имеем функцию с указанным параметром base
и эта фукция ожидает от нас следующий параметр. при выполнении функции addOne мы возвращаем значение переданое в фукцию +1

Когда мы выполним все в алерте то мы получим (addOne(5) = 6) + (addOne(3) = 4) и алерт выведет число 10.

*/
