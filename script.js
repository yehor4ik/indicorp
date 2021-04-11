const $burger = document.querySelector('.header-burger')
const $burgerMenu = document.querySelector('#burger-menu')

document.body.addEventListener('click', burgerClickHandler)

function burgerClickHandler(event) {
    let open = false;

    if ($burger.contains(event.target)) {
        open = true
    }

    toggleBurger(open)
}

function toggleBurger(open) {
    if ( open && !$burgerMenu.classList.contains('active')) {
        $burgerMenu.classList.add('active')
        $burger.classList.add('active')
    } else {
        $burgerMenu.classList.remove('active')
        $burger.classList.remove('active')
    }
}