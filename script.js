const navDrawer = document.querySelector(".nav-drawer")
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")

function showDrawer() {
  navDrawer.classList.toggle("show-drawer")
}

function hideDrawer() {
  navDrawer.classList.toggle("show-drawer")
}

menu.onclick = showDrawer
close.onclick = hideDrawer