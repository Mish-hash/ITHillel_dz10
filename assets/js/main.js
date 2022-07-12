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

