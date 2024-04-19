
// element selector
const Add_Note_btn = document.querySelector('.hover-btn');
const note_container = document.querySelector('.note');


// add note button event
Add_Note_btn.addEventListener('click', function () {
    addNode_fun()
})

function addNode_fun(text = '') {
    let oparation_div = document.createElement('div');
    oparation_div.className = 'oparation';
    oparation_div.innerHTML = `
                             <div class="button-content">
                                  <button type="button" class="edit btn-icon">
                                          <i class="fa-regular fa-pen-to-square"></i>
                                  </button>
                                  <button type="button" class="delete btn-icon">
                                          <i class="fa-solid fa-trash-can"></i>
                                  </button>
                            </div>
                               <div class="text-content">
                                <div class="mian ${text ? '' : 'hidden'}"></div>
                                <textarea class="${text ? 'hidden' : ''}"placeholder="write a Note here......."></textarea>
                              `;
    note_container.appendChild(oparation_div);

    // element selector
    const delete_note_btn = oparation_div.querySelector('.delete');
    const edit_and_toggle_btn = oparation_div.querySelector('.edit');
    const mian_note_contect = oparation_div.querySelector('.mian');
    const textarea = oparation_div.querySelector('textarea');





    // note delete button event
    delete_note_btn.addEventListener('click', function () {
        oparation_div.remove()
        update_Data()
    })

    // edit toggle button event
    edit_and_toggle_btn.addEventListener('click', function () {
        mian_note_contect.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    // textarea event text value catch
    textarea.addEventListener('change', function (e) {
        let value = e.target.value        
        mian_note_contect.innerText = value;       
        
        update_Data()        
    })

    // catch old text
    mian_note_contect.innerHTML = text;
    textarea.value = text;

}

// data inside set in localstorage
function update_Data() {
    const text_area_data = document.querySelectorAll('textarea')
    const notes = [];


    text_area_data.forEach((note) => {
        return notes.push(note.value);
    })


    localStorage.setItem('notes', JSON.stringify(notes))
}


// get data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach((note) => {
        return addNode_fun(note)
    })
}
