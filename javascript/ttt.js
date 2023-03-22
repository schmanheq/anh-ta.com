const gameField = document.getElementsByClassName("gridline")
const circle = document.getElementsByClassName("circle")
const circle_styles = window.getComputedStyle(circle[0])

const cross = document.getElementsByClassName("cross")
const cross_style = window.getComputedStyle(cross[0])




for(let i=0; i<gameField.length; i++) {
gameField[i].addEventListener('click', draw(gameField[i]))} 


function draw(element){
    element.appendChild(cross[0])
    cross[0].style.display = 'block'

}

