const navSlide = () => {
    const moon = document.querySelector('.moon')
    const nav = document.querySelector('.nav-links')

    // Toggle nav
    moon.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    })

}

navSlide()

// function scrollFunction() {
//     const moon = document.querySelector('.moon')
//     const nav = document.querySelector('.nav-links')
//     moon.style.position = 'fixed'
//     moon.style.top = 0;
//     moon.style.right = 0;
//     nav.style.position = 'fixed'
// }

// window.onscroll = scrollFunction;

window.addEventListener('scroll', function (e) {
    const moon = document.querySelector('.moon')
    const nav = document.querySelector('.nav-links')
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        // enter code here
        moon.style.position = 'fixed'
        moon.style.top = 0;
        moon.style.right = 0;
        nav.style.position = 'fixed'
    } else {
        moon.style.position = 'initial'

    }
});