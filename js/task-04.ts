// 1 необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// 2 при нажатии Cancel, выводит в консоль сообщение 'Отменено пользователем!'

// 3 рассчитывает общую цену заказа и сохраняет в переменной totalPrice

// 4 если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'

// 5 в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'

let credits: number = 23580;
const pricePerDroid: number = 3000;

const droidValue: string = prompt(
    'Введите количество дроидов, которое хотите купить',
);
const totalPrice: number = pricePerDroid * Number(droidValue);

if (droidValue === null) {
    console.log('Отменено пользователем');
} else if (!+droidValue) {
    alert('Было введено не число');
} else if (pricePerDroid * Number(droidValue) < credits) {
    credits = credits - totalPrice;
    console.log(
        `Вы купили ${droidValue} дроидов, на счету осалось ${credits} кредитов.`,
    );
} else {
    console.log('Недостаточно средств на счету!');
}
