const sidenavHam = document.querySelector('#sidenav-burger');
const sidenav = document.querySelector('#fernosa-sidenav')
const closeSideNav = document.querySelector('#close-sidenav')


sidenavHam.addEventListener("click", () => {
    if (sidenav.classList.contains('sidenav-expand')) {
        sidenav.classList.remove('sidenav-expand')
    } else {
        sidenav.classList.add('sidenav-expand')
    }
})

closeSideNav.addEventListener("click", () => {
    if (sidenav.classList.contains('unhidden')) {
        sidenav.classList.add('w0')
        sidenav.classList.remove('unhidden')
        sidenav.classList.remove('sidenav-expand')
        closeSideNav.classList.add('fa-chevron-right')
    } else {
        sidenav.classList.remove('w0')
        sidenav.classList.add('unhidden')
        sidenav.classList.remove('sidenav-expand')
        closeSideNav.classList.remove('fa-chevron-right')
    }
})


