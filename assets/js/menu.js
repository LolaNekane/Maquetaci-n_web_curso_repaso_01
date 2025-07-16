document.addEventListener('DOMContentLoaded', (event) => {
        let button = document.querySelector('.layout__menu-toogle');
        let icon_bars = document.querySelector('.layout__menu-toogle .fa-bars');
        let icon_xmark = document.querySelector('.layout__menu-toogle .fa-xmark');
        let aside = document.querySelector('.layout__aside');

        button.addEventListener('click', (event) => {
            let visible = document.querySelector(".layout__aside--visible");

            if(!visible) {
                aside.classList.add('layout__aside--visible')
                icon_bars.style.opacity = 0;
                icon_xmark.style.opacity = 1;
            } else {
                aside.classList.remove('layout__aside--visible')
                icon_bars.style.opacity = 1;
                icon_xmark.style.opacity = 0;
            }
        });


        /*Para que no se ponga el menu abierto cuando haces pequeña la pantalla y vuelte a normal y luego vuelves a pequeño, para que siempre este oculto la primera vez*/ 
        window.addEventListener('resize', () => {
            let size= document.body.clientWidth;

            /*Esta medida es cuando se pone el menu responsive*/
            if(size <= 1060) {
                aside.classList.remove('layout__aside--visible')
                icon_bars.style.opacity = 1;
                icon_xmark.style.opacity = 0;
            }
        })
})