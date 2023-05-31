const toggler = document.getElementById('menu-toggle')
const menu = document.querySelector('.menu')

toggler.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show')

    } else {
        menu.classList.add('show')

    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        menu.classList.remove('show')
    }
})
