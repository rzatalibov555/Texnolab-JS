// https://www.w3schools.com/jsref/prop_element_classlist.asp


function bg(){
    let demo = document.getElementById('demo').className

    if(demo == "show"){
        document.getElementById("demo").classList.remove("show")
        document.getElementById("demo").classList.add("hide")
    }else{
        document.getElementById("demo").classList.add("show")
        document.getElementById("demo").classList.remove("hide")
    }

    // var a = "Mammadrza"
    // a.length

    // console.log(a.length)
    // document.getElementById("demo").classList.toggle("aa")   
    
    // document.getElementById("demo").classList.remove("aa")

    // document.getElementById("demo").classList.add("bgColor")

    // document.getElementById("demo").classList.replace('aa',"bgColor")
}