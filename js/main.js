(function() {
    // open menu
    const btn = document.querySelector('.js-menu-btn');
    const menu = document.querySelector('.js-menu');

    btn.addEventListener('click',  () => {
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    });
})();

