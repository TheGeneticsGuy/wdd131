
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// functions
function addChapter() {
    const text = input.value.trim();

    if (text !== '') {
        const newListItem = document.createElement("li");
        const delButton = document.createElement("button");

        newListItem.textContent = text;
        delButton.textContent = '❌';

        newListItem.append(delButton);
        list.appendChild(newListItem);      // Add it to the list

        // Add event to delete button listener to delete.
        delButton.addEventListener('click', function () {
            list.removeChild(newListItem);
            input.focus();
        });

        // Clear the input field
        input.value = '';
    }
    input.focus();

};

// Event Listeners
button.addEventListener('click', addChapter);