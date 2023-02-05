
const tech = [
    {label: 'html'},
    {label: 'css'},
    {label: 'javascript'},
    {label: 'node.js'},
    {label: 'react'},
    {label: 'vue'},
    {label: 'next.js'},
    {label: 'mobx'},
    {label: 'redux'},
    {label: 'react router'},
    {label: 'graphql'},
    {label: 'postgresql'},
    {label: 'mongodb'},
];

// // console.log(tech[0].label);
// // console.log(tech[2].label);
// // console.log(tech[0]['label']);
// // console.log(tech[1].label);


// // for (const k in tech) {
// //     console.log(k);
// // // console.log(tech[k]);

// // }

// console.log(Object.keys(tech[0]));



const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
}
// console.log(refs['list']);
// console.log(refs['input']);


refs.input.addEventListener('input', _.debounce(onFilterChange,1300))
// refs.input.addEventListener('input',onFilterChange)//default

const listItemsMarkup = createListItemsMarkkup(tech)
populateList(listItemsMarkup)

function createListItemsMarkkup (items) {
    return items.map(item => `<li>${item.label}</li>` ).join('')
}
// console.log(createListItemsMarkkup(tech));

function onFilterChange(e) {
    // console.log(e.target.value);

const fil = e.target.value.toLowerCase()
const filtereditems = tech.filter(t =>
     t.label.toLowerCase().includes(fil),
     )

    //  console.log(filtereditems);

    const listItemsMarkup = createListItemsMarkkup(filtereditems)
    console.log(listItemsMarkup);
    populateList(listItemsMarkup)
    
}

function populateList (markup) {
    refs.list.innerHTML = markup
}