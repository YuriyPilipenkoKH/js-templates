function getRandomHexColor() {
    return `${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
     }`;
     }

function hexToRgb(hex){
    const converter = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]; //definir os intervalos para corte (FF, FF, FF)
    const keep = [];
    let i = 0;
    // console.log(converter);
    
    converter.forEach(element => {
    keep[i] = parseInt(element, 16); // estrutura para converter o valor cortado e armazenar o mesmo na posicao do vetor
    i+=1; //contador
    });
    
    return (keep.join()); //utilizar .join() no vetor para exibir os elementos do vetor juntos
    }

    let hexValue  =  getRandomHexColor()
    let rgbValue = hexToRgb(hexValue)

    // console.log(hexValue);
    // console.log(rgbValue);
    const colors = []

    const create = document.querySelector('.create-color');
    create.addEventListener('click',createObjectOfColors());

function createObjectOfColors(x){
   
const item = {};
let y = getRandomHexColor()
item.hex = `#${y}`;
item.rgb = `${hexToRgb(y)}`;
// console.log(item);

colors.push(item);

return colors;
}

for (let i = 0; i < 150; i+=1) {
    createObjectOfColors()
    
}

console.log(colors); // array of colors

//===============colorpicker==================

const paletteContainer = document.querySelector('.js-palette')
const cardsMarkup = createColorCardsMarkup(colors)

paletteContainer.insertAdjacentHTML('beforeend',cardsMarkup)
paletteContainer.addEventListener('click',onPaletteContainerClick )

// console.log(createColorCardsMarkup(colors))

function createColorCardsMarkup (colors) {
    const markup = colors.map(({hex,rgb}) => {
        return `
        <div class="color-card">
        <div class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex};"
        ></div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div> 
        `;
    });
console.log(markup);

return markup.join('');
// creates markup
}

function onPaletteContainerClick(e) {
   if(!e.target.classList.contains('color-swatch'))  {
    return
   }



   const swatchEl = e.target;
   const parentColorCard = swatchEl.closest('.color-card') 

    removeActiveCardClass();
    addActiveCardClass(parentColorCard )
    setBodyColor(swatchEl.dataset.hex);
}  

function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
   if(currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
   }
}

function addActiveCardClass (card) {
    card.classList.add('is-active')
}