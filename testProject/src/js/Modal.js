


const burgerModal = () => {
    document.querySelector('body').addEventListener('click', (event) => {


        if (!event.target.classList.contains('btn__menu')) return;
        return document.querySelector('.nav__list').classList.toggle('none');
    });
};

export default burgerModal;