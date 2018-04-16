const createDivButton = document.querySelector('.create-button');
const bodyEl = document.querySelector('body');

createDivButton.addEventListener('click', createDiv);

function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');

    let width = randomSize();
    let height = randomSize();

    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';


    newDiv.style.top = (randomPos(window.innerHeight - height)) + 'px';
    newDiv.style.left = (randomPos(window.innerWidth - width))+ 'px';

    newDiv.style.backgroundColor = randomColor();

    document.body.appendChild(newDiv);

}

function randomSize() {
    return Math.floor(Math.random() * 300 + 50);
}

function randomPos(dimension) {
    return Math.floor(Math.random() * dimension);
}

function randomColor() {
    let hex = '1234567890abcdef';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * (hex.length))];
    }

    return color;
}

bodyEl.addEventListener('mousedown', function(evt) {

    if(evt.target.tagName == 'DIV') {
        var currentDiv = evt.target;
    }

    currentDiv.style.zIndex += 1;
    bodyEl.addEventListener('mousemove', moveElement, false);

    window.addEventListener('mouseup', function() {
            bodyEl.removeEventListener('mousemove', moveElement, false);
        }, false);


   function moveElement(evt) {
       currentDiv.style.left = evt.clientX - currentDiv.offsetWidth / 2  + 'px';
       currentDiv.style.top = evt.clientY - currentDiv.offsetHeight / 2 + 'px';
   }

   currentDiv.ondragstart = function() {
    return false;
  };
    
}, false);