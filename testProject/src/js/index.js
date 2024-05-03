export function themeColor() {
    const moon = document.querySelector('.theme--moon')
    const sun = document.querySelector('.theme--sun')
    sun.addEventListener('click',(event)=> {
return document.querySelector('body').classList.toggle('sun-theme')
    })


}

// .night-theme 
// .sun-theme