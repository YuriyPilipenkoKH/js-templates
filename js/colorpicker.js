function getRandomHexColor() {
    return `${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
    }`;
  }

  function hexToRgb(hex){
    let converter = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]; //definir os intervalos para corte (FF, FF, FF)
    let keep = [];
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

    console.log(hexValue);
    console.log(rgbValue);
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

for (let i = 1; i < 9; i+=1) {
    createObjectOfColors()
    
}

console.log(colors);
