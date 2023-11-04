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
