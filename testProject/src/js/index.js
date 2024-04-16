export function btnLang() {
    document.querySelector('body').addEventListener('click', (event) => {

        const btnLangEl = document.querySelector('.btn__lang');

        if (!event.target.classList.contains('btn__lang')) return;

        if (btnLangEl.textContent === 'dk') {

            return btnLangEl.textContent = 'en'
        } else {

            return btnLangEl.textContent = 'dk';
        }

    });
}