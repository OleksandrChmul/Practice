// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */

// const answer = prompt("Яка офіційна назва JavaScript?").toLowerCase().trim();
// if (answer === "ecmascript") {
//     alert("Вірно!");
// }
// else {
//     alert("Не знаєте? ECMAScript!");
//     }
// console.log(answer);
/**
 *
 *
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */
const max = 50;
const min = 23;
for (let i = max; i >= min; i -= 1) {
  if (!(i % 2)) console.log(i);
}
