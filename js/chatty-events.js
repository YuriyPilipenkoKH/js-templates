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
 console.log('chatty-events.html');