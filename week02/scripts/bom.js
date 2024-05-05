
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const listElement = document.createElement('li');
const delButton = document.createElement('button');

listElement.textContent = input.value;
delButton.textContent = '❌';
listElement.append(delButton);
list.append(listElement)