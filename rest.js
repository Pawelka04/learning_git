

const userName = prompt('Введите имя', '');
alert(`Привет,  ${userName} !`);

const currentYear = 2022;
const userBirthYear = prompt('Введите свой год рождения');
const userCurrentAge = currentYear - userBirthYear;
alert(`Ваш возраст ${userCurrentAge} лет`);

const sideOfSquare = prompt('Ввести сторону квадрата в см');
const squarePerimeter = alert('Периметр квадрата равен ' + sideOfSquare * 4 + ' см');


const circleRadius = prompt('Введите размер радиуса окружности в см');
const circleArea = alert('Длина окружности равна' + (2 * ((Math.PI).toFixed(3)) * circleRadius) +
' см, а площадь круга с таким радиусом равна ' + (Math.PI).toFixed(3) * (circleRadius ** 2) + ' см^2');

const distance = prompt('Введите расстояние между городами в км');
const time = prompt('Сколько часов нужно добраться?', 1) || 1;
const speed = alert('Нужно двигаться со скоростью' + distance / time + ' км/ч');

const kursDollareuro = 0.91;
const dollarQuantity = prompt(' Введите сумму в долларах');
alert('Эта сумма эквивалентна ' + (dollarQuantity * kursDollareuro) + ' евро');


const flashValue = prompt('Объем Введите флешки в ГБ');
const mbValue = flashValue * 1024;
alert(`На флешку размер ${flashValue} ГБ вместится ` + (mbValue / 820).toFixed(2) + 'файлы размером 820 мБ');

const oneChocolatebarCost = prompt('Введите стоимость одной шоколадки');
const amountOfMoney = prompt(' Введите сумму денег для покупки');
const chocolatebarsQuantity = Math.floor(amountOfMoney / oneChocolatebarCost);
const balanceAfterPurchase = (amountOfMoney - chocolatebarsQuantity * oneChocolatebarCost);
alert(`На сумму ${amountOfMoney} можно купить ${chocolatebarsQuantity} шт. шоколадок, сдача составит ${balanceAfterPurchase}.`);

const number = prompt('Введите  3- значное число'); //123
const lastCharacter = (number % 10); // 3
const number2 = Math.floor (number / 10); // 12
const secondCharacter = (number2 % 10); // 2
const firstCharacter = Math.floor(number2 / 10); // 1
console.log('последнийсимвол, второйсимвол,первыйсимвол');
alert(`${lastCharacter}${secondCharacter}${firstCharacter}`)


const number1 = prompt();
number1 % 2 == 0 ? alert('четное') : alert('нечетное');