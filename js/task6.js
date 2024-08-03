


// let f1 = "flower1"
// let f2 = "flower2"
// let f3 = "flower3"
// let f4 = "flower4"
// let f5 = "flower5"


// document.write(f1)
// document.write(f2)
// document.write(f3)
// document.write(f4)
// document.write(f5)


let flowers = ["flower1", 
                "flower2", 
                "flower3", 
                "flower4",
                "flower5",
                "Zara"
                ] // Array
// let f = new Array("flower1", "flower2", "flower3", "flower4", "flower5") //Array

// console.log(`Hello my name is ${flowers[5]} ${flowers[0][6]}`)


// let box = ["PC", "pen", "keyboard"]

// document.write(box[0]+" and "+ box[2])


// let box = [
//             ['PC', "mouse", "Keyboard", "notebook"],
//             ["Shoes", "T-shirt", "hat","Egg"],
//             ["Paint","Brush","Canvas"],
//             ["Azerbaijan", ['Baku', "Xirdalan", "Sumqayit", "Quba"], ["Egg1"] , "Turkey", "Italy", "France", "Pakistan","Denmark"]
//         ]

// console.log(box[3][7][0]+box[0][1][4]+box[3][1][1][5]+box[3][0][2]+box[3][1][2][7]+box[1][0][3])

// Denmark      D
// mouse        e
// Xirdalan     l
// Azerbaijan   e
// Sumqayit     t
// Shoes        e




 
// ESHBAN - POINT 5
// ZARA   - POINT 5
// FIZZA  - POINT 5
// FRAZ   - POINT 5




// let movie = []

// movie[0] = "Matrix"
// movie[1] = "Super mario"
// movie[2] = "Deadpool"



// let movie = ["Matrix", "Super mario", "God Father"]

// movie[1] = "Batman"
 
// let popFilms = movie[2]

// console.log(popFilms)


// function demo(){
//     alert("hello")
// }

// let movie = [demo]

// console.log(movie[0]())

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Zara","Eshban","Rza"];
// let fruit = fruits[fruits.length - 3];

// console.log(fruit)



// const animals = ["Dog", "Cat", "Rabbit"]
// console.log(animals)

// animals.push('Bird')
// console.log(animals)



// () - function
// [] - Array
// {} - Object


// .demo{

// }


// function demo() {
    
// }




// const animals = ["Dog", "Cat", "Rabbit"]
// animals.shift()  // evvelden silir
// animals.pop()    //axirdan silir


// animals.unshift("Monkey") //evvelden elave edir
// animals.push("Monkey") //axirdan elave edir

// animals[1] = ""

// console.log(animals)


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"]
// const arr3 = ["Robin", "Morgan"];
// console.log(myBoys)
// console.log(myGirls)
// console.log(myBoys.concat(arr3,myGirls))

var users = ["Fizza"]
console.log(users)
function addUsername(){
    let username = document.getElementById('username')
    users.push(username.value.trim())
    username.value = ""
    console.log(users)
}