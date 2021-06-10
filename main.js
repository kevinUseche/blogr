const btnNavMain = document.querySelector('.open-close-navbar');
const navMain = document.querySelector('.nav-main');

btnNavMain.addEventListener('click', ()=> {
    let src = btnNavMain.children[0].getAttribute('src');
    if (src == 'images/icon-hamburger.svg') {
        btnNavMain.children[0].src = 'images/icon-close.svg';
    }else{
        btnNavMain.children[0].src = 'images/icon-hamburger.svg';
    }
    navMain.classList.toggle('show-nav-main');
})



const items = document.querySelectorAll('.item > a');

items.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        item.children[0].classList.toggle('show-arrow');
        const id = item.getAttribute('href');
        const divShow = document.querySelector('#'+id);
        divShow.classList.toggle('item-show');
    });
});
