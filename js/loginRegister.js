
// function register(){

// }

// onkeydown = (e) => {
    
//     if(e.key == "Enter" && gender.value != ""){
//             start()
//     }
    
// }






// function start(){
//     let name     = document.getElementById('name')
//     let surname  = document.getElementById('surname')
//     let username = document.getElementById('username')
//     let password = document.getElementById('password')
//     let age      = document.getElementById('age')
//     let gender   = document.getElementById('gender')
    
//     if(name.value.trim() && surname.value == "" && username.value == "" && password.value == "" && age.value == "" && gender.value == ""){
//         document.getElementById('err').innerHTML = "Error"
//     }else{
//         console.log(name.value)
//         console.log(surname.value)
//         console.log(username.value)
//         console.log(password.value)
//         console.log(age.value)
//         console.log(gender.value)
//     }

    
//    }









// function start(event) {
//     event.preventDefault();
    
//     let name = document.getElementById('name').value.trim();
//     let surname = document.getElementById('surname').value.trim();
//     let username = document.getElementById('username').value.trim();
//     let password = document.getElementById('password').value.trim();
//     let age = document.getElementById('age').value.trim();
//     let gender = document.getElementById('gender').value;

//     let errorMessage = "";
    
//     if (!name) {
//         document.getElementById('name_err').innerHTML = "Name is required.";
//         document.getElementById('name').style.borderColor = "red"
    
        
//     }
//     if (!surname) errorMessage += "Surname is required.<br>";
//     if (!username) errorMessage += "Username is required.<br>";
//     if (!password) errorMessage += "Password is required.<br>";
//     if (!age) errorMessage += "Age is required.<br>";
//     if (!gender) errorMessage += "Gender is required.<br>";

//     if (errorMessage) {
//         document.getElementById('err').innerHTML = errorMessage;
//     } else {
//         document.getElementById('err').innerHTML = "";
//         console.log("Name:", name);
//         console.log("Surname:", surname);
//         console.log("Username:", username);
//         console.log("Password:", password);
//         console.log("Age:", age);
//         console.log("Gender:", gender);
//     }
// }

// document.onkeydown = (e) => {
//     if (e.key == "Enter" && document.getElementById('gender').value != "") {
//         start(e);
//     }
// }







function start(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let surname = document.getElementById('surname').value.trim();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let age = document.getElementById('age').value.trim();
    let gender = document.getElementById('gender').value;

    let isValid = true;

    // Reset error messages
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('surnameError').innerHTML = "";
    document.getElementById('usernameError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('ageError').innerHTML = "";
    document.getElementById('genderError').innerHTML = "";

    if (!name) {
        document.getElementById('nameError').innerHTML = "Name is required.";
        isValid = false;
    }
    if (!surname) {
        document.getElementById('surnameError').innerHTML = "Surname is required.";
        isValid = false;
    }
    if (!username) {
        document.getElementById('usernameError').innerHTML = "Username is required.";
        isValid = false;
    }
    if (!password) {
        document.getElementById('passwordError').innerHTML = "Password is required.";
        isValid = false;
    }
    if (!age) {
        document.getElementById('ageError').innerHTML = "Age is required.";
        isValid = false;
    }
    if (!gender) {
        document.getElementById('genderError').innerHTML = "Gender is required.";
        isValid = false;
    }

    if (isValid) {
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Age:", age);
        console.log("Gender:", gender);
    }
}

document.onkeydown = (e) => {
    if (e.key === "Enter" && document.getElementById('gender').value !== "") {
        start(e);
    }
};

