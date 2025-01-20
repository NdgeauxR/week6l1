"use strict";

const ul = document.getElementById("ul-all-numbers");
const numbers = [100, 456, 98, 45, 43, 73];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  ul.innerHtml += `<li>${number}</li>`;
}


