export function initBackground(nbTriangle = 0) {
    for(let i = 0; i < nbTriangle; i++) {
        let tr = createTriangle()
        document.append(tr)
    }
}

function createTriangle() {
    let triangle = document.createElement("img")
    triangle.src = "./pictures/triangle.svg"
    triangle.style.rotate = Math.floor(Math.random() * 360) + "deg"
    return triangle
}