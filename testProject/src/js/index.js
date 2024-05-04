export function themeColor() {

    

    const bodyEl = document.querySelector('body')
    bodyEl.addEventListener('click', (event) => {

        const moonEl = document.querySelector('.theme--moon')
        const sunEl = document.querySelector('.theme--sun')

        if (!event.target.classList.contains('theme--moon') && !event.target.classList.contains('theme--sun') ) return;
        
        if (bodyEl.classList.contains('night-theme')) {
            bodyEl.classList.toggle('sun-theme');
            bodyEl.classList.toggle('night-theme');


            moonEl.classList.add('display--none')
            sunEl.classList.remove('display--none')


        } else {
            bodyEl.classList.toggle('night-theme');
            bodyEl.classList.toggle('sun-theme');
            sunEl.classList.toggle('display--none')
            sunEl.classList.add('display--none')
            moonEl.classList.remove('display--none')
        }
    });


    // return document.querySelector('body').classList.toggle('sun-theme')
// }) 




}

// .night-theme 
// .sun-theme  .classList.toggle('none');