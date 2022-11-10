
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    let numberOfElements = document.querySelector("form input[type='number']").value;
    let elementsText = document.querySelector("form input[type='text']").value;
    let typeOfElement = document.querySelector("form select").value;
    let parentElement = document.querySelector("div.results");
    parentElement.innerHTML = "";
    for (let i = 0; i < numberOfElements; i++) {
        let myElement;
        if (typeOfElement === "Div") {
            myElement = document.createElement("div");
        }
        else {
            myElement = document.createElement("section");
        }
        myElement.className = "box";
        myElement.title = "title";
        myElement.id = `id-${i + 1}`;
        myElement.textContent = elementsText;
        parentElement.appendChild(myElement);
    }
}



