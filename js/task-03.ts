const ADMIN_PASSWORD: string = 'jqueryismyjam';
let message : string;

let userInput: string = prompt("Введите пароль");

if (!userInput) {
    message = "Отменено пользователем";
    
} else if (message === ADMIN_PASSWORD) {
    message= 'Добро пожаловать!'
    
} else {
    message='Доступ запрещен, неверный пароль!'
}
alert(message)
