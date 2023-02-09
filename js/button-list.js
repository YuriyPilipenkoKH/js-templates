const container = document.querySelector('.js-container');
container.addEventListener('click', onClick)

function onClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    console.log(event.target);
    console.log(event.target.textContent);
    console.log(event.target.nodeName);
}

// input: document.querySelector("#controls").firstElementChild,
// input: document.querySelector("#controls").firstElementChild,


const addBtn = document.querySelector('.js-add-button')
const delBtn = document.querySelector('.js-del-button')
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick)
delBtn.addEventListener('click', onDelBtnClick)

function onAddBtnClick() {
    const btn = document.createElement('button')
    btn.textContent = `${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter +=1;
}


function onDelBtnClick() {
    container.lastElementChild.remove()
    labelCounter -=1;
}
