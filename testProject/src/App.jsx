import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import burgerModal from './js/Modal'
import {btnLang} from './js/index'


burgerModal()
btnLang()

function App() {
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState('en'); // Додаємо стан для мови\
  const [mamba, setBanana] = useState(0)

  const handleBananaClick = () => {
    setBanana(mamba + 2)
  }

  const handleEnClick = () => {
    setLanguage('en'); // Оновлюємо стан мови
    setCount(count + 1); // Оновлюємо стан лічильника
  };

  const handleDkClick = () => {
    setLanguage('dk'); // Оновлюємо стан мови
    setCount(count + 1); // Оновлюємо стан лічильника
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
                About me
                {language === 'en' ? `count is ${count}` : `tælling er ${count}`}
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
          <button className='btn__lang'> en </button>
          <button className='btn__menu'>  </button>
        </nav>
      </header>
<main className='general'></main>
<footer className='cellar'></footer>






    </>
  );
}

export default App;




      // <div>
      //   <a href="https://vitejs.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>
      // <h1>Vite + React</h1>
      // <div className="card">
      //   <button onClick={handleEnClick}>
      //     {language === 'en' ? `count is ${count}` : `tælling er ${count}`} {/* Умовний вивід */}
      //   </button>
      //   <button onClick={handleBananaClick}>{`mamba eat ${mamba} banana` }</button>
      //   <p>
      //     {language === 'en' ? 'Edit' : 'Rediger'} <code>src/App.jsx</code> {language === 'en' ? 'and save to test HMR' : 'og gem for at teste HMR'}
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   {language === 'en' ? 'Click on the Vite and React logos to learn more' : 'Klik på Vite- og React-logoerne for at lære mere'}
      // </p>
      // <button className='en' onClick={handleEnClick}>en</button> {/* Додано обробник подій для en */}
// <button className='dk' onClick={handleDkClick}>dk</button> Додано обробник подій для dk
      


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [language, setLanguage] = useState('en');

//   const handleLanguageToggle = () => {
//     setLanguage(language === 'en' ? 'dk' : 'en');
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <header className='chairman'>
//         <nav className='navigation'>
//           <a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">
//             Vlad
//           </a>
//           <ul className='nav__list'>
//             <li className="nav__item">
//               <a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">
//                 Home
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">
//                 About me {language === 'en' ? `count is ${count}` : `tælling er ${count}`}
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">
//                 Contact me
//               </a>
//             </li>
//           </ul>
//           <button className='btn__lang' onClick={handleLanguageToggle}>
//             {language === 'en' ? 'dk' : 'en'}
//           </button>
//           <button className='btn__menu'>Menu</button>
//         </nav>
//       </header>
//       <main className='general'></main>
//       <footer className='cellar'></footer>
//     </>
//   );
// }

// export default App;
