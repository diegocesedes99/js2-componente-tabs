function clickHandler(event) {
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);

    for(let i = 0; i < cont.length; i++){
        cont[i].style.display = 'none';
        if (cont[i].getAttribute('id') == id){
            cont[i].style.display = 'block';
        }
    }
}

const link = document.querySelectorAll('.tabs-tablist-item');

const cont = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    cont[i].style.display = 'none';
}

cont[0].style.display = 'block';

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click' , clickHandler);
}