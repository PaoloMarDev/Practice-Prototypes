
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => { // Funcion de flecha
    // Conseguimos la posición del mouse "x" e "y"
    const xPos = event.offsetX;                   
    const yPos = event.offsetY;
    
    // Creamos el elemento/etiqueta "span"
    const spanEl = document.createElement("span");
    
    // Le ponemos la posición del mouse al "span"
    spanEl.style.left = xPos + "px" 
    spanEl.style.top = yPos + "px"
    
    // Le asignamos al "body" el "span" como hijo
    bodyEl.appendChild(spanEl);
    
    const size = Math.random() * 100 // generamos un numero random
     
    spanEl.style.height = size + "px" // le cambiamos el tamaño por un numero random
    spanEl.style.width = size + "px"

    // Removemos la etiqueta span despues de 3000 mls
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})