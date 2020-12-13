// 1создать цикл уоторый просит пользователя ввести число
// 2если пользователь нажал cancel остановить цикл
// 3если ввели не null добавить число к total
// 4после завершения цикла вывести общую сумму ввода используя alert с текстом 
// 'Общая сумма чисел равна [сумма]'

let input;
let total = 0;

do {
    
    input=prompt("введите число");

    if (input === null) {
        break;
    }
    input = Number(input);
    
    const notANumber = Number.isNaN(input);

    if (notANumber) {

        alert("Было введено не число, попробуйте еще раз");
        continue;
    }

    total += input;

} while (true);

alert(`Общая сумма чисел равна ${total}`);