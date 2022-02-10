function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');

    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

let locationPrincipal = window.pageYOffset;
window.onscroll = function () {
    let nowLocation = window.pageYOffset;
    if (locationPrincipal >= nowLocation) {
        document.getElementById('menu').style.top = '0';
    } else {
        document.getElementById('menu').style.top = '-100px';
    }
    locationPrincipal = nowLocation
}