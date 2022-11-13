/*Новые элементы должны добавляться в список по нажатию на Enter */

/*const sendInput = document.querySelector("#input");
sendInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
    }
});*/

const sendInput = document.querySelector("#input");
const itemsList = document.querySelector("#items");

sendInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        // новые элементы добавляются по нажатию Enter

        const messageText = sendInput.value;

        const newElement = document.createElement("div");
        newElement.classList.add("message");
        newElement.textContent = messageText;

        if (inputText != "") {
            itemsList.append(newElement);
        }
        sendInput.value = ""; //очистили input
    }
});

/*const newElements = document.querySelector("#input");
        newElements.addEventListener("keyup", (event) => {
            if (event.code === "Enter") console.log("enter was pressed");
        });*/

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */