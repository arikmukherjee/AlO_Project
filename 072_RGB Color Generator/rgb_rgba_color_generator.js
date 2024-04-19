let red = document.querySelector("#red")
let green = document.querySelector("#green")
let black = document.querySelector("#black")
let alf = document.querySelector("#alfa")
let cName = document.querySelector("#cName")
let bod = document.querySelector("#bod")

red.addEventListener("click",e => {
    let redV = Math.round(red.value * 2.55)
    let greenV = Math.round(green.value * 2.55)
    let blackV = Math.round(black.value * 2.55)
    let alfaV = alf.value * 0.01
    bod.setAttribute("style",`background-color:rgba(${redV},${greenV},${blackV},${alfaV})`)
    cName.textContent = `rgba(${redV},${greenV},${blackV},${alfaV})`
    
})

green.addEventListener("click",e => {
    let redV = Math.round(red.value * 2.55)
    let greenV = Math.round(green.value * 2.55)
    let blackV = Math.round(black.value * 2.55)
    let alfaV = alf.value * 0.01
    bod.setAttribute("style",`background-color:rgba(${redV},${greenV},${blackV},${alfaV})`)
    cName.textContent = `rgba(${redV},${greenV},${blackV},${alfaV})`
})
black.addEventListener("click",e => {
    let blackV = Math.round(black.value * 2.55)
    let redV = Math.round(red.value * 2.55)
    let greenV = Math.round(green.value * 2.55)
    let alfaV = alf.value * 0.01
    bod.setAttribute("style",`background-color:rgba(${redV},${greenV},${blackV},${alfaV})`)
    cName.textContent = `rgba(${redV},${greenV},${blackV},${alfaV})`
})

alf.addEventListener("click",e => {
   let alfaV = alf.value * 0.01
   let greenV = Math.round(green.value * 2.55)
   let blackV = Math.round(black.value * 2.55)
   let redV = Math.round(red.value * 2.55)
   bod.setAttribute("style",`background-color:rgba(${redV},${greenV},${blackV},${alfaV})`)
    cName.textContent = `rgba(${redV},${greenV},${blackV},${alfaV})`
})
