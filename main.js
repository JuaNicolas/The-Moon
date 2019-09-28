
navSlide = () => {
    let moon = document.querySelector('.moon')
    let nav = document.querySelector('.nav-links')
    // Toggle nav
    moon.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    })

}

window.addEventListener('scroll', function () {
    let moon = document.querySelector('.moon')
    let nav = document.querySelector('.nav-links')

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {

        moon.style.position = 'fixed'
        moon.style.top = '5vh'
        moon.style.right = '5vw'
        nav.style.position = 'fixed'
    } else {
        moon.style.position = 'initial'
    }
})

window.onload = function () {
    navSlide()
}