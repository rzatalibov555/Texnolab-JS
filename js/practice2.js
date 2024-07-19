
// function chBgColor1(){
//     document.getElementById('demo1').style.background = "blue"
//     document.getElementById('demo1').style.borderRadius = "50%"
// }

// function chBgColor2(){
//     document.getElementById('demo2').style.background = "blue"
//     document.getElementById('demo2').style.borderRadius = "50%"
// }

// function chBgColor3(){
//     document.getElementById('demo3').style.background = "blue"
//     document.getElementById('demo3').style.borderRadius = "50%"
// }






// function chBgColor(e){
//     e.style.background = "transparent"
// }

// function chBgColorBack(e){
//     e.style.background = "red"
// }



// function demo2(){
//     return "Hello"
// }

// function color(){
//     return "Blue"
// }

// let a = demo2()
// let b = color


// document.getElementById('test').innerHTML = a
// document.getElementById('test').innerHTML = a
// document.getElementById('test').innerHTML = a
// document.getElementById('test').innerHTML = a
// document.getElementById('test').innerHTML = a
// document.getElementById('test').innerHTML = a












// document.getElementById('test').innerHTML = demo()





function demo() {
    alert('Start')
}


function chBgColor() {
    document.body.style.background = "red"
}


function chCarImg() {
    let value = document.getElementById('select_car_name').value

    document.getElementById('cars').src = `img/${value}`
}


function start(e) {
    e.style.background = "blue"
}

function end(e) {
    e.style.background = "transparent"
}

var top_side = 10
var left_side = 10
var demo = document.getElementById('demo')



onkeydown = (e) => {
        
    if (e.key == "ArrowDown") {
        demo.style.top = top_side+"px"
        top_side += 10 
    }


    if (e.key == "ArrowUp") {
        demo.style.top = top_side+"px"
        top_side -= 10 
    }
    
    if (e.key == "ArrowLeft") {
        demo.style.left = left_side+"px"
        left_side -= 10 
    }

    if (e.key == "ArrowRight") {
        demo.style.left = left_side+"px"
        left_side += 10 
    }









    //     key -  keyCode
    //     0   -  48
    //     1   -  49
    //     2   -  50
    //     3   -  51
    //     4   -  52
    //     5   -  53
    //     6   -  54
    //     7   -  55
    //     8   -  56
    //     9   -  57


    // if(e.keyCode < 48 || e.keyCode > 57){
    //     alert("Use only Numbers!")
    // }else{
    //     console.log(`${e.key} ${e.keyCode}`)
    // }

    // ArrowUp
    // ArrowDown
    // ArrowRight
    // ArrowLeft
}




