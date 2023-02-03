const tagsContainer = document.querySelector('.js-tags')

tagsContainer.addEventListener('click',onTagsContainerClick)

function onTagsContainerClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return
    }

console.log(e.target);
e.target.classList.toggle('tags__btn--active')
}