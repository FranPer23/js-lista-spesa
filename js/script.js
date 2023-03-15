const shoppingList = ["a", "b", "c", "d", "e", "f"];
console.log(shoppingList);

let listElem = 0;

while (listElem < shoppingList.length) {
    console.log(shoppingList[listElem]);
    listElem++;
}

const ul = document.querySelector('ul')
ul.innerHTML += `<li>${shoppingList}</li>`