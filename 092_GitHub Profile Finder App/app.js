
// api
const api_url = 'https://api.github.com/users/'

// Element Selector
const output_container = document.querySelector('.output_container');
const input_search = document.querySelector('#search');
const search_btn = document.querySelector('#search_btn');

async function getUser(user_name) {
    const response = await fetch(api_url + user_name)

    if (response.status === 404) {
        alert('There is no profile with this name')
    } else {
        const data = await response.json()

        // profile pic
        output_container.querySelector('.img-content img').setAttribute('src', data.avatar_url)
        // name
        output_container.querySelector('.name h1').innerText = data.name;
        // Followers Following and Repos
        output_container.querySelector('.ffr').innerHTML = `
                                                    <a target="_blank" href="https://github.com/${user_name}?tab=followers"><span>${data.followers} Followers</span></a>
                                                    
                                                    <a target="_blank" href="https://github.com/${user_name}?tab=following"><span>${data.following} Following</span></a>
                                                    
                                                    <a target="_blank" href="https://github.com/${user_name}?tab=repositories"><span>${data.public_repos} Repos</span></a>
    `



        // bio add
        output_container.querySelector('.bio').innerText = data.bio;


        visit_fun(data.html_url)


        console.log(data);
    }
}

// input search event
search_btn.addEventListener('click', function (e) {
    let value = input_search.value.trim()

    if (!value) {
        alert('Please enter username')
    } else {
        getUser(value)




    }
})

// < a class="visit" href = "#" > visit</ >

function visit_fun(data) {
    let a = document.createElement('a');
    a.className = 'visit';
    a.setAttribute('href', data)
    a.setAttribute('target', '_blank')
    a.innerText = 'view profile'
    document.querySelector('.output_container .box').appendChild(a)

}




