
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para)
// document.getElementsByClassName("demo")[1].appendChild(para)




// const button = document.createElement('Button')
// button.textContent = "Send"
// document.body.appendChild(button)

// const id = document.createAttribute("id")
// id.value = "demo1"

// button.setAttributeNode(id)

// const style = document.createAttribute("style")

// button.setAttributeNode(style)
// button.style.color = "red"


// ================================================

// // Create a button element
// const button = document.createElement('button');
// button.textContent = "Send"; // Set the button text

// // Append the button to the document body
// document.body.appendChild(button);

// // Set the button id
// button.id = "demo1";

// // Apply style to the button
// button.style.color = "red";


// ================================================

// Create a button element
// const button = document.createElement('button');
// button.textContent = "Send"; // Set the button text

// // Append the button to the document body
// document.body.appendChild(button);

// // Set the button id
// button.id = "demo1";

// // Apply multiple styles to the button
// button.style.color = "red";
// button.style.backgroundColor = "blue";
// button.style.fontSize = "16px";
// button.style.border = "2px solid black";
// button.style.padding = "10px 20px";
// button.style.borderRadius = "5px";

// ================================================

// // Create a button element
// const button = document.createElement('button');
// button.textContent = "Send"; // Set the button text

// // Append the button to the document body
// document.body.appendChild(button);

// // Set the button id
// button.id = "demo1";

// // Apply multiple styles to the button using cssText
// button.style.cssText = `
//   color: red;
//   background-color: blue;
//   font-size: 16px;
//   border: 2px solid black;
//   padding: 10px 20px;
//   border-radius: 5px;
// `;



// ================================================

// Create a button element
const button = document.createElement('button');
button.textContent = "Send"; // Set the button text

// Append the button to the document body
document.body.appendChild(button);

// Set the button id
const id = document.createAttribute("id");
id.value = "demo1";
button.setAttributeNode(id);

// Create and set the style attribute
const style = document.createAttribute("style");
style.value = "color: red; background-color: blue; font-size: 16px; border: 2px solid black; padding: 10px 20px; border-radius: 5px;";
button.setAttributeNode(style);


const onclick = document.createAttribute("onclick");
onclick.value = "demo2()";
button.setAttributeNode(onclick);


function demo(){
    console.log("hello")
}

const demo2 = () => {
    console.log("hello2")
}





// ===========================================

const input = document.getElementsByTagName("INPUT")[0]
input.setAttribute('class', 'myInput')
input.setAttribute("id", "Eshban")
input.setAttribute('placeholder',"Enter username")



const my_button = document.getElementById("demo1")
my_button.setAttribute("type", "button")