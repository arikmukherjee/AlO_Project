// variable intializing:
let und = document.querySelector("#und")
let _lowercase = document.querySelector("#low")
let _uppercase = document.querySelector("#upp")
let _bold = document.querySelector("#bol")
let _italic = document.querySelector("#ita")
let area = document.querySelector("#area")
let text = document.querySelector("#_text")

// events:
und.addEventListener("click", e => {
    text.textContent = ""
    area.value = null
})

area.addEventListener("keyup",e => {
    text.textContent = e.target.value                 
})

_lowercase.addEventListener("click", e => {
    text.textContent = area.value.toLowerCase()
})

_uppercase.addEventListener("click", e => {
    text.textContent = area.value.toUpperCase()
})

_bold.addEventListener("click", e => {
    text.classList.toggle('bold')
})

_italic.addEventListener("click", e => {
    text.classList.toggle('italic')
})