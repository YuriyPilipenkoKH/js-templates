const targetBtn = document.querySelector('.js-target-btn');
const addListernerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', () => {
    console.log('KLIK');
})

addListernerBtn.addEventListener('click', () => {
    console.log('hang');
    targetBtn.addEventListener('click', onTargetBtnClick )
})

removeListenerBtn.addEventListener('click', () => {
    console.log('remove');
    removeListenerBtn.addEventListener('click', onTargetBtnClick )
})



function onTargetBtnClick() {
    console.log('click');

} 

function logMessage() {
     console.log('Target button click');

}

//===========indexOf()===============


