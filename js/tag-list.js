 const tagsContainer = document.querySelector('.js-tags')
//  console.log(tagsContainer);
let selectedTag = null;

 tagsContainer.addEventListener('click',onTagsContainerClick)

 function onTagsContainerClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active') ;
    // console.log(currentActiveBtn);

    if(currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active')
    }

    const nextActiveBtn = e.target;
    // console.log(e.target);
    nextActiveBtn.classList.add('tags__btn--active')

    selectedTag = nextActiveBtn.dataset.value;
    console.log(selectedTag);
 } 