const shoppingList = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(shoppingList);

let listElem = 0;
const list = document.querySelector("ul")
while (listElem < shoppingList.length) {
    console.log(shoppingList[listElem]);
    const item = shoppingList[listElem]
    list.innerHTML += `<li>${item}</li>`
    listElem++;
}


