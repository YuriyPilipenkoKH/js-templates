const tagsContainer = document.querySelector('.js-tags')
// const selectedTags = []
const selectedTags = new Set() 


tagsContainer.addEventListener('click',onTagsContainerClick)

function onTagsContainerClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return
    }

    const btn = e.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active')

    if(isActive) {
        selectedTags.delete(tag)
    } else {
        selectedTags.add(tag)
    }

    btn.classList.toggle('tags__btn--active')

    console.log(selectedTags);

// console.log(e.target);
// e.target.classList.toggle('tags__btn--active')
// selectedTags.add(e.target.dataset.value)

// selectedTags.push(e.target.dataset.value)
// console.log(selectedTags);


}