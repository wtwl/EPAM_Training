const cont = document.getElementsByClassName('container')[0];

function deleteTextNodes(element) {
    for(let i = 0; i < element.childNodes.length; i++) {
        let child = element.childNodes[i];
        if(child.nodeType === 3) {
            element.removeChild(child);
            i--;
        } else {
            deleteTextNodes(child);
        }
    }
}

deleteTextNodes(cont);