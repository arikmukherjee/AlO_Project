// getting elements with DOM in js:
let btn1 = document.querySelector("#twoxthree")
let btn2 = document.querySelector("#threexfour")
let btn3 = document.querySelector("#fourxfive")
let btn4 = document.querySelector("#fivexsix")
let input = document.querySelector("#file")
let photo = document.querySelector("#img")
let open = document.querySelector("#open")

// adding events to the buttons:
open.addEventListener('click',e => {
    photo.setAttribute("src",input.value)
})

btn1.addEventListener("click",e => {
    photo.setAttribute("style","height:300px;")
    photo.setAttribute("style","width:200px;")
})

btn2.addEventListener("click",e => {
    photo.setAttribute("style","height:400px;width:300px;")
})

btn3.addEventListener("click",e => {
    photo.setAttribute("style","height:500px;width:400px;")
})

btn4.addEventListener("click",e => {
    photo.setAttribute("style","height:600px;width:500px;")
})