import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import burgerModal from './js/Modal'
import {btnLang} from './js/index'


burgerModal()
btnLang()

function App() {
  const [language, setLanguage] = useState('en'); // Додаємо стан для мови

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'dk' : 'en'); // Змінюємо мову на протилежну
  };

  return (
    <>
      <header className='chairman'>
        <nav className='navigation'>
          <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
            Vlad
          </a>
          <ul className='nav__list '>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                {language === 'en' ? `About me` : `om mig`}
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                Contact me
              </a>
            </li>
          </ul>
          <button className='btn__lang' onClick={handleLanguageChange}> {language === 'en' ? 'dk' : 'en'} </button>
          <button className='btn__menu'>  </button>
        </nav>
      </header>
      <main className='general'></main>
      <footer className='cellar'></footer>
    </>
  );
}


export default App;

