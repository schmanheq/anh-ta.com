const gameField = document.getElementsByClassName("gridline")
var a = 0 
var func = (field) => main(field.target)
var sum = []

//ADD eventlistener to the gameFields
for(let i =0; i < gameField.length; i++) {
    gameField[i].addEventListener('click', func)
    gameField[i].innerHtml = i
    gameField[i].style.color='000'
}
//Circle and Cross Function
function drawCross2(field) {
        var cross_create = document.createElement("div")
        cross_create.className="cross"
        field.appendChild(cross_create)
        cross_create.style.display = 'block'
        a++
        return a
}
function drawCircle2(field) {
        var circle_created = document.createElement("div")
        circle_created.className="circle"
        field.appendChild(circle_created)
        circle_created.style.display = 'block'
        return a++
}
//Draw Function
function main(field) {
    if(a==8){
        drawCross2(field)
        field.removeEventListener('click', func)
        console.log("game over")
    }
    else if(a%2 ==0) {
        field.removeEventListener('click', func)
        drawCross2(field)
        field.innerHtml = 15
        if(a>=5) {
            var array = [[gameField[0].innerHtml, gameField[1].innerHtml, gameField[2].innerHtml], [gameField[3].innerHtml, gameField[4].innerHtml, gameField[5].innerHtml],[gameField[6].innerHtml, gameField[7].innerHtml, gameField[8].innerHtml],[gameField[0].innerHtml, gameField[3].innerHtml, gameField[6].innerHtml],[gameField[1].innerHtml, gameField[4].innerHtml, gameField[7].innerHtml],[gameField[2].innerHtml, gameField[5].innerHtml, gameField[8].innerHtml],[gameField[2].innerHtml, gameField[4].innerHtml, gameField[6].innerHtml],[gameField[0].innerHtml, gameField[4].innerHtml, gameField[8].innerHtml]] 
            winCheck(array)
            if(winCheck(array)){console.log(sum)}
        }
    }
    else{
        field.removeEventListener('click', func)
        drawCircle2(field)
        field.innerHtml = 28 
        if(a>=5) {
            var array = [[gameField[0].innerHtml, gameField[1].innerHtml, gameField[2].innerHtml], [gameField[3].innerHtml, gameField[4].innerHtml, gameField[5].innerHtml],[gameField[6].innerHtml, gameField[7].innerHtml, gameField[8].innerHtml],[gameField[0].innerHtml, gameField[3].innerHtml, gameField[6].innerHtml],[gameField[1].innerHtml, gameField[4].innerHtml, gameField[7].innerHtml],[gameField[2].innerHtml, gameField[5].innerHtml, gameField[8].innerHtml],[gameField[2].innerHtml, gameField[4].innerHtml, gameField[6].innerHtml],[gameField[0].innerHtml, gameField[4].innerHtml, gameField[8].innerHtml]] 
            winCheck(array)
            if(winCheck(array)){console.log(sum)}
        }
    }
}

//Check if win
function winCheck(array) {
    for(let i = 0; i< array.length; i++){
        var elemSum = 0
        for(let j =0; j<array[i].length; j++) {elemSum += array[i][j]} 
        if(elemSum>0){sum.push(elemSum)}
    }
    return sum.includes(45)||sum.includes(84)
}

