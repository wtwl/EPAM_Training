const parentElement = document.getElementsByClassName("container")[0];
const childElement = document.createElement("span");
const childElement2 = document.createElement("span");
childElement.innerHTML = '<h1>child1</h1>';
childElement2.innerHTML = '<h1>child2</h1>';


function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild);
}

prepend(parentElement, childElement);
prepend(parentElement, childElement2);