const inputToday = document.querySelector('#today-InputDate');
const inputDOB = document.querySelector('#DOB-InputDate');
const BTN_calculation = document.querySelector('#calculation');
const BTN_clear = document.querySelector('#all-clear');
const age_content = document.querySelector('.age-content');
const more_details = document.querySelector('.more-details');
const next_birthday = document.querySelector('.next-birthday');



let todayInputValue = new Date().toISOString().substring(0, 10);
inputToday.setAttribute('value', todayInputValue)

let today = new Date(inputToday.value)

BTN_clear.addEventListener('click', function (e) {
    location.reload()
})

BTN_calculation.addEventListener('click', function () {

    if (inputToday.value && inputDOB.value) {
        Your_Exact_Date_Of_Birth()
        Your_Age_Is()
        You_are_Alive()
        next_birthday_function()
    } else {
        alert('Please enter your date of birth')
    }

})

function Your_Exact_Date_Of_Birth() {

    let your_dob = new Date(inputDOB.value)

    let getDateArr = your_dob.toLocaleDateString('en-GB',
        {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }
    ).split(' ')

    // console.log(getDateArr);//['Friday,', '2', 'January', '1998']--my birthday

    // --------------- apply data ---------------------
    //weekday
    age_content.firstElementChild.lastElementChild.firstElementChild.innerText = getDateArr[0]
    //month
    age_content.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.innerText = getDateArr[2]
    // day
    age_content.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = getDateArr[1]
    //year
    age_content.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText = getDateArr[3]

}

function Your_Age_Is() {
    let your_dob = new Date(inputDOB.value);
    let d1 = your_dob.getDate();
    let m1 = your_dob.getMonth() + 1;
    let y1 = your_dob.getFullYear();

    let todayValue = today;
    let d2 = todayValue.getDate();
    let m2 = todayValue.getMonth() + 1;
    let y2 = todayValue.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;

    } else {

        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    //------------------- apply data-------------------
    // year
    age_content.lastElementChild.lastElementChild.firstElementChild.innerText = `${y3} Years`;
    // month
    age_content.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerText = `${m3} Months`;
    // days
    age_content.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText = `${d3} Days`

}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function You_are_Alive() {
    let todayValue = today;
    let your_dob = new Date(inputDOB.value);

    // ---------------------------------------------------------- \\
    const seconds = 1000;
    const minutes = 60;
    const hours = 24;
    const week = 7;

    let oneWeek = seconds * minutes * minutes * hours * week;
    let oneDay = seconds * minutes * minutes * hours;
    let oneHour = seconds * minutes * minutes;
    let oneMinutes = seconds * minutes;
    let oneSeconds = seconds
    // ---------------------------------------------------------- \\

    // week , days , yours , minutes , seconds
    const calcu = (today_date, Date_of_Birth, x) => (today_date - Date_of_Birth) / x;
    // month
    const calcu_month = (Date_of_Birth, today_date) => (today_date.getFullYear() - Date_of_Birth.getFullYear()) * 12 + today_date.getMonth() - Date_of_Birth.getMonth();

    let year_total = getAge(your_dob)
    let month_total = calcu_month(your_dob, todayValue);
    let week_total = Math.floor(calcu(todayValue, your_dob, oneWeek));
    let days_total = calcu(todayValue, your_dob, oneDay);
    let hours_total = calcu(todayValue, your_dob, oneHour);
    let minutes_total = calcu(todayValue, your_dob, oneMinutes);
    let seconds_total = calcu(todayValue, your_dob, oneSeconds);

    //--------------- apply data -----------------------

    more_details.lastElementChild.innerHTML = `
    <li>
        <span>In Years</span>
        <span><span  class="num">${year_total}</span> Years</span>
   </li>
   <li>
       <span>In Months</span>
       <span><span  class="num">${month_total}</span> Months</span>
   </li>
   <li>
      <span>In Weeks</span>
      <span><span  class="num">${week_total}</span> Weeks</span>
   </li>
   <li>
      <span>In Days</span>
      <span><span  class="num">${days_total}</span> Days</span>
   </li>
   <li>
      <span>In Hours</span>
      <span><span  class="num">${hours_total}</span> Hours</span>
   </li>
   <li>
      <span>In Minutes</span>
      <span><span  class="num">${minutes_total}</span> Minutes</span>
   </li>
   <li>
     <span>In Seconds</span>
     <span><span  class="num">${seconds_total}</span> Seconds</span>
   </li>`

}


function next_birthday_function() {
    let todayValue = today;
    let your_dob = new Date(inputDOB.value);

    let upcomingBday = new Date(todayValue.getFullYear(), your_dob.getMonth(), your_dob.getDate());

    if (todayValue > upcomingBday) {
        upcomingBday.setFullYear(todayValue.getFullYear() + 1);
    }

    var one_day = 24 * 60 * 60 * 1000;

    let daysLeft = Math.ceil((upcomingBday.getTime() - todayValue.getTime()) / (one_day));

    next_birthday.firstElementChild.innerHTML = ` <span class="num-last">${daysLeft}</span> days after your birthday <span><i class="fa-solid fa-cake-candles"></i></span> `

}
