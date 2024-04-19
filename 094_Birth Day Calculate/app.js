


let x = new Date()
let birthDate = `15 November ${x.getFullYear()} 4:20 AM`
// let birthDate = `24 January ${x.getFullYear()} 4:20 AM`

let inputs = document.querySelectorAll('input');

function countDown() {
    const end_time = new Date(birthDate)
    let now = new Date()
    let difference = (end_time - now) / 1000;


    inputs[0].value = Math.floor(difference / 3600 / 24)
    inputs[1].value = Math.floor(difference / 3600) % 24;
    inputs[2].value = Math.floor(difference / 60) % 60;
    inputs[3].value = Math.floor(difference % 60) ;


setTimeout(() => {
    countDown()    
    console.log('time run');
}, 1000);
}


countDown()


/**
 * 1 day = 24 hr
 * 24 hr = 1440 min
 * 1440 min = 86400 sec
 */