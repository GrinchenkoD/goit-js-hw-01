//1 оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt
//2 преобразовать инпут в нижний регистр
//3 Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
//  Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'
//4 если страны нет в списке вывести в alert сообщение 'В вашей стране доставка не доступна'
// СПИСОК СТРАН
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let userCountry: string = prompt('Введите страну доставки');
let price: number;

if (!userCountry) {
    alert('Отменено пользователем');
} else if (userCountry) {
    userCountry = userCountry.toLowerCase();

    switch (userCountry) {
        case 'китай':
            price = 100;
            userCountry = 'Китай';
            break;
        case 'чили':
            price = 250;
            userCountry = 'Чили';
            break;
        case 'Австралия':
            price = 170;
            userCountry = 'Австралию';
            break;
        case 'Индия':
            price = 80;
            userCountry = 'Индию';
            break;
        case 'Ямайка':
            price = 120;
            userCountry = 'Ямайку';
            break;

        default:
            alert('В вашей стране доставка не доступна');
    }
    alert(`Доставка в ${userCountry} будет стоить ${price} кредитов`);
}