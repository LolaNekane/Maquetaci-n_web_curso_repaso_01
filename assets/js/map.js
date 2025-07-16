document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
         <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5267.287996373939!2d1.2674186358085886!3d38.96495419806071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12994a6b14b151c7%3A0x84d6b5f0c238955e!2sCarrer%20Val%C3%A8ncia%2C%2016%2C%2007829%20Sant%20Josep%20de%20sa%20Talaia%2C%20Illes%20Balears!5e1!3m2!1ses!2ses!4v1752603239414!5m2!1ses!2ses"  ></iframe>`;
    }, 500);
    
})