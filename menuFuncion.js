function handleMenuDisplay(element){

    const menu = document.querySelector('.sidebar-menu');

    if(menu.classList.contains('show')){

        menu.classList.remove('show');
        element.classList.add('fa-circle-chevron-right');
        element.classList.remove('fa-circle-chevron-left');

    }else{

        menu.classList.add('show');
        element.classList.remove('fa-circle-chevron-right');
        element.classList.add('fa-circle-chevron-left');
    }
}