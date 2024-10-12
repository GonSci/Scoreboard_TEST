const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-nm"),
    clearButton = document.querySelector(".clear-button");

inputField.addEventListener("keyup", (e) => {



    if (e.key === "Enter") {
        console.log("this is enter key")
    }
});


