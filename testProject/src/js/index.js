export function themeColor() {

    const bodyEl = document.querySelector('body');
    const moonEl = document.querySelector('.theme--moon--png');
    const sunEl = document.querySelector('.theme--sun--png');

    const turnOn =() =>{
        bodyEl.classList.add('sun-theme');
        bodyEl.classList.remove('night-theme');
    }

    const turnOf = () => {
        bodyEl.classList.add('night-theme');
        bodyEl.classList.remove('sun-theme');
    }

    const keyLocalStorage = 'color-theme';

    const storedData = localStorage.getItem(keyLocalStorage);
    const dataFromStorage = storedData ? JSON.parse(storedData) : {};

    if (dataFromStorage.theme === 'white') {
        turnOn()
    }

    if (dataFromStorage.theme === 'black') {
        turnOf()
    }

    bodyEl.addEventListener('click', (event) => {
        const moonEl = document.querySelector('.theme--moon--png');
        const sunEl = document.querySelector('.theme--sun--png');

        if (!event.target.classList.contains('theme--moon--png') && !event.target.classList.contains('theme--sun--png')) return;

        if (bodyEl.classList.contains('night-theme')) {
            turnOn()

            moonEl.classList.add('display--none');
            sunEl.classList.remove('display--none');

            dataFromStorage.theme = 'white';
            localStorage.setItem(keyLocalStorage, JSON.stringify(dataFromStorage));
        } else {
            turnOf()
            sunEl.classList.add('display--none');
            moonEl.classList.remove('display--none');

            dataFromStorage.theme = 'black';
            localStorage.setItem(keyLocalStorage, JSON.stringify(dataFromStorage));
        }
    });
}
