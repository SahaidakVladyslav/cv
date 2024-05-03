import { useState } from 'react'
import './App.css'
import burgerModal from './js/Modal'
import {themeColor} from './js/index'


burgerModal()
function App() {
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'dk' : 'en'); 
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
                {language === 'en' ? `Home` : `Hjem`}
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                {language === 'en' ? `About me` : `Om mig`}
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                {language === 'en' ? `Portfolio` : `Portefølje`}
              </a>
            </li>
            <li className="nav__item">
              <a className='nav__link' href="#"  target="_blank" rel="noopener noreferrer">
                {language === 'en' ? `Contact me` : `Kontakt mig`}
              </a>
            </li>
          </ul>
          <button className='btn__lang' onClick={handleLanguageChange}> {language === 'en' ? 'en' : 'dk' }  </button>
          <button className='btn__menu'>

          <svg className='svg__menu'><use className='svg__menu--use' href="./src/assets/react.svg#menu"></use></svg>

          </button>
          <img className='theme--moon' src="./src/assets/moon.png" alt="moon" />
          <img className='theme--sun' src="./src/assets/sun.png" alt="sun" />

        </nav>
      </header>
      <main className='general'></main>
      <footer className='cellar'></footer>
    </>
  );
}



export default App;

