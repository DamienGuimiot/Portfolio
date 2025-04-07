export function initBackground(nbTriangle = 0) {
    for(let i = 0; i < nbTriangle; i++) {
        let tr = createTriangle()
        let delay = Math.floor(Math.random() * 10)
        tr.style.animationDelay = -delay + "s"
        document.body.append(tr)
        setTimeout(() => {
            tr.style.animationDelay = "0s"
        }, (10-delay)*1000)
    }
}

function createTriangle() {
    let triangle = document.createElement("img")
    triangle.src = "./pictures/triangle.svg"
    // triangle.style.rotate = Math.floor(Math.random() * 360) + "deg"
    triangle.style.left = Math.floor(Math.random() * document.documentElement.clientWidth) + "px"
    triangle.style.top = Math.floor(Math.random() * document.documentElement.clientHeight) + "px"
    triangle.style.width = (Math.floor(Math.random() * 25) + 8) + "px"
    triangle.style.height = triangle.style.width
    triangle.classList.add("backTriangle")
    return triangle
}