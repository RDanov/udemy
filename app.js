const board = document.querySelector('#board')
const SQUARES_QUANTITY = 980
const colors = ['#1e1d83', '#1c2259', 'green', 'yellow', 'pink', '#138', 'gray', 'red']


for (let i = 0; i < SQUARES_QUANTITY; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
     board.append(square)
}

function setColor(element) {
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
