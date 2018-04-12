function deleteTextNodes(element) {
    const childElements = element.childNodes;
    for(let i = 0; i < childElements.length; i++) {
        if(childElements[i].nodeType == 3) {
            childElements[i].remove();
        }
    }
}
