

let cars = JSON.parse(localStorage.getItem("cars")) || ["BMW"];

function myF() {
    let myInput = document.querySelector("#text").value.trim();
    if (myInput) {
        cars.push(myInput);
        localStorage.setItem("cars", JSON.stringify(cars));
        document.querySelector("#text").value = "";
        console.log(cars);
    }
}


function deleteAll(){
    localStorage.clear()
}

console.log(cars);





// let cars = ["BMW"]

// function myF(){

//     let myInput = document.querySelector("#text").value.trim()
//     cars.push(myInput)
//     myInput = ""
//     localStorage.setItem(cars, myInput)
    
//     console.log(cars)
// }
// localStorage.getItem(cars)
// console.log(cars)



// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status    -   HTTP response status codes























// let text = "";
// let i = 0;


// while (i < 0) {
//     text += i + "<br>";
//     i++;
// }

// document.getElementById("demo").innerHTML = text;

// for( i = 0; i < 10; i++ ){

// }

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let result = "";
// let b = 0;
// while (b < cars.length) {
//   result += cars[b] + "<br>";
//   b++;
// }
// document.getElementById("demo").innerHTML = result;


//   try {
//     aledrst('sdsd')
//   }
//   catch(err) {
//     console.log(err.message)
//   }





