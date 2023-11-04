/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

const someObj = {
  worker1: 360,
  worker2: 750,
  worker3: 240,
};
function sumTotalSelery(obj) {
  const arrayValues = Object.values(obj);
  let total = 0;
  for (let i of arrayValues) {
    total += i;
  }
  return total;
}

console.log(sumTotalSelery(someObj));


// При завантаженні сторінки користувачеві пропонується
//  *? в prompt ввести число. Введення додається до значення
//  *? змінної total.
//  *? Операція введення числа триває до того часу,
//  *? поки користувач не натисне кнопку Cancel у prompt.
//  *? Після того як користувач припинив введення, натиснувши на
//  *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

//  *! Робити перевірку, що користувач ввів саме число,
//  *! а не довільний набір символів не потрібно.

let number = prompt("Введіть чисо");
let total = 0;
while (number !== null) {
  total = Number(number) + total;
  number = prompt("Введіть чисо");
}
console.log(`Загальна сума введених чисел дорівнює ${total}`);
