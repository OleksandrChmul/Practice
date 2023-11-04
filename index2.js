// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

const arr = ["best", "the", "foo", "is", "js"];
const indexFoo = arr.indexOf("foo"); // 2
const newArray = arr.slice(); // cop arr
newArray.splice(indexFoo, 1);
newArray.reverse();
newArray;
console.log(newArray.join(" "));

const string = arr
  .slice(0, arr.indexOf("foo"))
  .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
  .reverse()
  .join(" ");
