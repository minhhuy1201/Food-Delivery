const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('#menu')
const menuButton = $('#menu-button')

menuButton.addEventListener('click', () => {
    menu.classList.toggle("invisible")
})