export function initBackground() {
    //remove all previous background triangles
    document.querySelectorAll(".backTriangle").forEach((tr) => {tr.remove()})

    //get background div
    let backgroundDiv = document.querySelector(".background")

    //find numbers of triangles
    let nbTriangle = (document.documentElement.clientWidth / 150) * (document.documentElement.clientHeight / 125) * 8

    //create all triangles
    for(let i = 0; i < nbTriangle; i++) {
        let tr = createTriangle()
        tr.style.animationDelay = -Math.floor(Math.random() * 30) + "s"
        backgroundDiv.append(tr)
    }
}

export function createEventListeners() {
    window.addEventListener("resize", debounce(initBackground, 500))
}

function createTriangle() {
    let triangle = document.createElement("img")
    triangle.src = "./pictures/triangle.svg"
    // triangle.style.rotate = Math.floor(Math.random() * 360) + "deg"
    triangle.style.left = (Math.floor(Math.random() * document.documentElement.clientWidth)-25) + "px"
    triangle.style.top = (Math.floor(Math.random() * document.documentElement.clientHeight)-75) + "px"
    triangle.style.width = (Math.floor(Math.random() * 25) + 9) + "px"
    triangle.style.height = triangle.style.width
    triangle.classList.add("backTriangle")
    return triangle
}

function debounce(func, wait) {
    let timer
    return function debouncedFunc(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), wait)
    }
}