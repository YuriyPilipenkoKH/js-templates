 const coordsOutputRef = document.querySelector('.js-coords')
 let mouseMoveCbInvocationCounter = 0;

 const throttledOnMouseMove = _.throttle(onMouseMove,500)
 
 window.addEventListener('mousemove',throttledOnMouseMove);

 function onMouseMove(e) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent =`
    onMouseMove() Invocations: ${mouseMoveCbInvocationCounter},
    X: ${e.clientX},
    Y: ${e.clientY}

    `;
 } 
// =================debounce=================

const inputRef = document.querySelector('.js-input')
const outputRef = document.querySelector('.js-output')
let inputCbInvocationCounter = 0

inputRef.addEventListener('input', _.debounce(onInputChange,2000))

function onInputChange(e) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    onMouseMove() Invocations: ${inputCbInvocationCounter},
    X: ${e.target.value},
    `
}
