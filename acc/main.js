const accordeon = document.querySelector('.accordeon');

accordeon.addEventListener('click', function(evt) {
    if(evt.target.tagName == 'BUTTON') {
        evt.target.nextElementSibling.classList.toggle('active');
    }
});