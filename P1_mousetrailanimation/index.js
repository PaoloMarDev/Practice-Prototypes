const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    
    const spanEl = document.createElement("span");
    
    spanEl.style.left = xPos + "px"
    spanEl.style.top = yPos + "px"
    
    bodyEl.appendChild(spanEl);
    
    const size = Math.random() * 100
    
    spanEl.style.height = size + "px"
    spanEl.style.width = size + "px"

    // Removemos la etiqueta span despues de 3000 mls
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})