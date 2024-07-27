
var top_side = 0
var left_side = 0

var top_side2 = 0
var left_side2 = 0

var z_index = 0



onkeydown = (e) =>{

    var player1 = document.getElementById('player1')
    var player2 = document.getElementById('player2')

    if(e.key === "o"){
       player1.style.zIndex = z_index
       z_index++
    }
    
    if(e.key === "p"){
        player2.style.zIndex = z_index
        z_index++
    }
    


    if(e.key === "ArrowUp"){
        player1.style.top = top_side + "px"
        top_side -= 10
    }

    if(e.key === "ArrowDown"){
        player1.style.top = top_side + "px"
        top_side += 10
    }

    if(e.key === "ArrowLeft"){
        player1.style.left = left_side + "px"
        left_side -= 10
    }

    if(e.key === "ArrowRight"){
        player1.style.left = left_side + "px"
        left_side += 10
    }




    if(e.key === "w"){
        player2.style.top = top_side2 + "px"
        top_side2 -= 10
    }

    if(e.key === "s"){
        player2.style.top = top_side2 + "px"
        top_side2 += 10
    }

    if(e.key === "a"){
        player2.style.left = left_side2 + "px"
        left_side2 -= 10
    }

    if(e.key === "d"){
        player2.style.left = left_side2 + "px"
        left_side2 += 10
    }

    
}