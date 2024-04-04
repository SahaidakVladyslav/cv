import './Modal.css';


const burgerModal = () => {
    document.querySelector('body').addEventListener('click', (event) => {
        console.log('until done')

        if (!event.target.classList.contains('btn__menu')) return;
        console.log('done')
        return document.querySelector('.nav__list').classList.toggle('none');
    });
};

export default burgerModal;