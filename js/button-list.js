const container = document.querySelector('.js-container')

function onClick(event) {}

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
    document.removeElement('button')
    labelCounter -=1;
}
