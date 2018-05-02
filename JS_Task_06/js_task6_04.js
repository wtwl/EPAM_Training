
const totalElements = {};

function formatOutput() {
    for(i in totalElements) {
        if(i[0] == '.') {
            console.log('Элементов с классом ' + i + ' : ' + totalElements[i]);
        } else if(i[0] == '#') {
            console.log('Текствых узлов: ' + totalElements[i]);
        }
        
        else {
            console.log('Тэгов ' + i + ' : ' + totalElements[i]);
        }
    }
}

function scanDOM(element) {
  
  if(element.hasChildNodes()) {
    for(let i = 0; i < element.childNodes.length; i++) {
        let child = element.childNodes[i];
        if(child.nodeType == 1) {
            addToObj(child);
            scanDOM(child);
        } else {
            addToObj(child);

        }
    }
    }
}

function addToObj(elem) {

    if(!(elem.nodeType == 3)) {
        if(!('.' + elem.classList in totalElements)) {
            totalElements['.' + elem.classList] = 1;
        } else {
            totalElements['.' + elem.classList]++;
        }
    }
    if(!(elem.nodeName in totalElements)) {
        totalElements[elem.nodeName] = 1;
    } else {
        totalElements[elem.nodeName]++;
    }
}



let bd = document.getElementsByTagName("body")[0];

scanDOM(bd);
formatOutput(); 
console.log(totalElements)

