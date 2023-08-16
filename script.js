const switchToggle = document.querySelector("input[type='checkbox']")
const toggleIcon = document.getElementById("toggle-icon")
const nav = document.getElementById("nav")

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")



function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        darkMode()
        imageSwitchMode('dark')
    } else {
        document.documentElement.setAttribute("data-theme", "light")
        lightMode()
        imageSwitchMode('light')
    }
}

function darkMode() {
    toggleIcon.children[0].innerText = "Night Mode"
    toggleIcon.children[1].classList.replace('bxs-sun', 'bxs-moon')
    nav.style.backgroundColor = "rgb(0 0 0/50%)"

}
function lightMode() {
    toggleIcon.children[0].innerText = "Day Mode"
    toggleIcon.children[1].classList.replace('bxs-moon', 'bxs-sun')
    nav.style.backgroundColor = "rgb(255 255 255/50%)"
}

function imageSwitchMode(mode) {
    img1.src = `currency_${mode}.svg`
    img2.src = `saving_${mode}.svg`
    img3.src = `weather_${mode}.svg`

}
switchToggle.addEventListener("change", switchMode)