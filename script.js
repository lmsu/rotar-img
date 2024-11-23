// script.js
 // Selecciona todas las imágenes con la clase 'img' 
 const images = document.querySelectorAll('.img'); 
 // Añade un evento de mouseover a cada imagen 
 images.forEach(img => { img.addEventListener('mouseover', () => {
     // Muestra el nombre cuando el mouse está sobre la imagen 
     img.style.setProperty('--img', `url(${img.dataset.img})`); 
    }); 
});