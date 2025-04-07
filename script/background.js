export function initBackground(nbTriangle = 0) {
    for(let i = 0; i < nbTriangle; i++) {
        let tr = createTriangle()
        document.body.append(tr)
    }
}

function createTriangle() {
    let triangle = document.createElement("img")
    triangle.src = "./pictures/triangle.svg"
    triangle.style.rotate = Math.floor(Math.random() * 360) + "deg"
    triangle.style.left = Math.floor(Math.random() * document.documentElement.clientWidth) + "px"
    triangle.style.top = Math.floor(Math.random() * document.documentElement.clientHeight) + "px"
    triangle.classList.add("backTriangle")
    return triangle
}