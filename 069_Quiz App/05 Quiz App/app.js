const question = [
    {
        'question': 'প্রশ্নঃ বাংলাদেশ বিজয় অর্জন করে কবে?',
        'a': '১৯৭১ সালের ১৪ ডিসেম্বর',
        'b': '১৯৭১ সালের ১৭ ডিসেম্বর',
        'c': '১৯৭১ সালের ১৬ ডিসেম্বর',
        'd': '১৯৭১ সালের ১৮ ডিসেম্বর',
        'correct-answer': ['c', '১৯৭১ সালের ১৬ ডিসেম্বর'],

    },
    {
        'question': 'প্রশ্নঃ বাংলাদেশে স্বাধীনতা দিবস কবে?',
        'a': '২৬ শে মার্চ',
        'b': '২১ শে ফেব্রুয়ারী',
        'c': '১৬ শে ডিসেম্বর',
        'd': '১৪ শে ফেব্রুয়ারী',
        'correct-answer': ['a', '২৬ শে মার্চ'],
    },
    {
        'question': 'প্রশ্নঃ বাঙ্গালি জাতির মুক্তির সনদ কোনটি?',
        'a': '৮ দফা দাবি আন্দোলন',
        'b': '৬ দফা দাবি আন্দোলন',
        'c': '১০ দফা দাবি আন্দোলন',
        'd': '৫ দফা দাবি আন্দোলন',
        'correct-answer': ['b', '৬ দফা দাবি'],
    },
    {
        'question': 'প্রশ্নঃ আগরতলা ষড়যন্ত্র মামলার আসামি ছিল কত জন?',
        'a': '১৭ জন',
        'b': '৩৫ জন',
        'c': '৩৪ জন',
        'd': '৩০ জন',
        'correct-answer': ['b', '৩৫ জন'],
    },
    {
        'question': 'প্রশ্নঃ শেখ মুজিবুর রহমানকে ‘বঙ্গবন্ধু’ উপাধি দেয়া হয় কবে?',
        'a': '১৯৭১ সালের ১৪ ফেব্রুয়ারি',
        'b': '১৯৬৯ সালের ২৩ ফেব্রুয়ারি',
        'c': '১৯৯০ সালের ২০ ফেব্রুয়ারি',
        'd': '১৯৫২ সালের ৭ ফেব্রুয়ারি',
        'correct-answer': ['b', '১৯৬৯ সালের ২৩ ফেব্রুয়ারি'],
    },
    {
        'question': 'প্রশ্নঃ আগরতলা ষড়যন্ত্র মামলার প্রধান আসামির নাম কি?',
        'a': 'ধীরেন্দ্রনাথ দত্ত',
        'b': 'কাজী নজরুল ইসলাম',
        'c': 'জিয়াউর রহমান',
        'd': 'বঙ্গবন্ধু শেখ মুজিবুর রহমান',
        'correct-answer': ['d', 'বঙ্গবন্ধু শেখ মুজিবুর রহমান'],
    },
    {
        'question': 'প্রশ্নঃ কেন্দ্রীয় আইন পরিষদের নির্বাচন অনুষ্ঠিত হয় কবে?',
        'a': '৭ ডিসেম্বর ১৯৭০',
        'b': '৫ ডিসেম্বর ১৯৭০',
        'c': '১৪ ডিসেম্বর ১৯৭০',
        'd': '৬ ডিসেম্বর ১৯৭০',
        'correct-answer': ['a', '৭ ডিসেম্বর ১৯৭০'],
    },
    {
        'question': 'প্রশ্নঃ যুক্তফ্রন্ট গঠিত হয় কতটি দল নিয়ে?',
        'a': 'ছয়টি দল',
        'b': 'আটটি দল',
        'c': 'চারটি দল',
        'd': 'তেরটি দল',
        'correct-answer': ['c', 'চারটি দল'],
    },
    {
        'question': 'প্রশ্নঃ রাষ্ট্রভাষা বাংলা চাই এর প্রথম প্রস্তাবক কে ছিলেন?',
        'a': 'ধীরেন্দ্রনাথ দত্ত',
        'b': 'জিয়াউর রহমান',
        'c': 'শেখ মুজিবুর রহমান',
        'd': 'কাজী নজরুল ইসলাম',
        'correct-answer': ['a', 'ধীরেন্দ্রনাথ দত্ত'],
    },
    {
        'question': 'প্রশ্নঃ ছয় দফা দাবি উথাপন করেন কে?',
        'a': 'রফিক',
        'b': 'জিয়াউর রহমান',
        'c': 'শেখ মুজিবুর রহমান',
        'd': 'শেখ সালাম',
        'correct-answer': ['c', 'শেখ মুজিবুর রহমান'],
    },
    {
        'question': 'প্রশ্নঃ ভাষা আন্দোলনের ফলে কোন প্রতিষ্ঠান স্থাপিত হয়েছিল?',
        'a': 'ইংলিশ একাডেমী',
        'b': 'বাংলা একাডেমী',
        'c': 'উর্দু একাডেমী',
        'd': 'আরবি একাডেমী',
        'correct-answer': ['b', 'বাংলা একাডেমী'],
    },
    {
        'question': 'প্রশ্নঃ বাঙালি জাতীয়তাবাদের মূলভিত্তি কি ছিল?',
        'a': 'ভাষা ও সংস্কৃতি',
        'b': 'স্বাধীন বাংলা',
        'c': 'ভাষা ও স্বাধীন',
        'd': 'স্বাধীন রাষ্ট্র',
        'correct-answer': ['a', 'ভাষা ও সংস্কৃতি'],
    },
    {
        'question': 'প্রশ্নঃ বাংলাদেশের পূর্বের নাম কি?',
        'a': 'দক্ষিণ পাকিস্তান',
        'b': 'পশ্চিম পাকিস্তান',
        'c': 'উত্তর পাকিস্তান',
        'd': 'পূর্ব পাকিস্তান',
        'correct-answer': ['d', 'পূর্ব পাকিস্তান'],
    },
    {
        'question': 'প্রশ্নঃ অসহযোগ আন্দোলনের ডাক দেয়া হয় কবে?',
        'a': ' ১৯৭১ সালের ৫ মার্চ',
        'b': ' ১৯৭১ সালের ৭ মার্চ',
        'c': ' ১৯৭১ সালের ১ মার্চ',
        'd': ' ১৯৭১ সালের ২ মার্চ',
        'correct-answer': ['d', '১৯৭১ সালের ২ মার্চ'],
    },
    {
        'question': 'প্রশ্নঃ অপারেশন সার্চলাইট কি?',
        'a': '২০০১ সালের ৫ আগস্ট ভাষা আন্দলন',
        'b': '১৯৯৮ সালের ১ জানয়ারি ডিজে গানের নাম',
        'c': '১৯৭১ সালের ২৫ মার্চের বর্বর হত্যাকান্ড',
        'd': '১৯৬৯ সালের ১৪ ফেব্রুয়ারি ভালোবাসা দিবস',
        'correct-answer': ['c', '১৯৭১ সালের ২৫ মার্চের বর্বর হত্যাকান্ড'],
    },
 
]

















/*

{
    'question': 'প্রশ্নঃ ',
    'a': '',
    'b': '',
    'c': '',
    'd': '',
    'correct-answer': ['', ''],
},

*/



























// Element select area
const submit_btn = document.querySelector('#submit_btn')
const input_option_all = document.querySelectorAll('input[name="option"]')
const full_container = document.querySelector('.container')
const reload_btn = full_container.querySelector('#relod_btn');





// variable defined
let index = 0;
let right = 0,
    wrong = 0;


// question box update function
function box_update() {
    let data = question[index];
    let question_total = question.length;
    full_container.querySelector('.total').innerText = question_total;

    // box refarece 
    const output_result = full_container.querySelector('#output-result');
    const input_show = full_container.querySelector('#input-show');


    if (question_total === index) {
        output_result.style.display = 'block';
        input_show.style.display = 'none'
        reload_btn.parentNode.style.display = 'block'
    } else {
        full_container.querySelector('.count-div').innerHTML = `<p>Question Number ${index + 1}/${question.length}</p>`
        full_container.querySelector('.question-div h1').innerHTML = data.question
        input_option_all[0].nextElementSibling.innerText = data.a
        input_option_all[1].nextElementSibling.innerText = data.b
        input_option_all[2].nextElementSibling.innerText = data.c
        input_option_all[3].nextElementSibling.innerText = data.d
    }

    // input_checked reset
    option_reset()
}
box_update()

// submit button event
submit_btn.addEventListener('click', function () {
    let value = get_input_option_value()

    if (value) {
        get_answer()

    } else {
        alert('অনুগ্রহ করে সঠিক উত্তরটি বেছে নিন')
    }
})

// reload button event
reload_btn.addEventListener('click', function () {
    location.reload();
})

// get answer
function get_answer() {
    let data = question[index];
    let value = get_input_option_value()

    // Element refarece
    let result_box = full_container.querySelector('.result_div')
    let result_icon = full_container.querySelector('.result_div .result-box i')


    if (value === data["correct-answer"][0]) {
        right++

        result_box.classList.add('display-block');
        result_icon.classList.add('fa-circle-check')
        result_icon.classList.remove('fa-circle-xmark')
        result_icon.style.color = '#05a353'
        result_icon.nextElementSibling.innerText = `Correct Answer`

        setTimeout(() => {
            result_box.classList.remove('display-block')
            index++
            box_update()
            return
        }, 1000);
    } else {
        wrong++

        result_box.classList.add('display-block');
        result_icon.classList.add('fa-circle-xmark')
        result_icon.classList.remove('fa-circle-check')
        result_icon.style.color = 'red'

        result_icon.nextElementSibling.innerHTML = `Correct Answer is : <span>${data["correct-answer"][1]}</span>`

        setTimeout(() => {
            result_box.classList.remove('display-block')
            index++
            box_update()
            return
        }, 2000);
    }

    full_container.querySelector('.right').innerText = right;
    full_container.querySelector('.wrong').innerText = wrong;

}


function option_reset() {
    input_option_all.forEach((option) => {
        option.checked = false
    })
}

function get_input_option_value() {
    let value;
    input_option_all.forEach((option) => {
        if (option.checked) {
            value = option.value;
        }
    })

    return value
}


