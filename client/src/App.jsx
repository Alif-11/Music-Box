import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AutoPlayer from './react-components/AutoPlayer';

function App() {
  const [count, setCount] = useState(0);






  useEffect(() => {
    const music_theme_selector = document.getElementById("music-theme-selector");

    function makeBig() {
      music_theme_selector.classList.add("make-big");
    }

    function undoMakeBig() {
      music_theme_selector.classList.remove("make-big");
    }
    music_theme_selector.addEventListener("mouseenter", makeBig);
    music_theme_selector.addEventListener("mouseleave", undoMakeBig);
  }, []);

  return (<>
    <div id="menu-bars" className="svg-left-align appear-animation">
      <svg width="56px" height="64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="X448Y512"><path fill="#FFFFFF" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
    </div>

    <div className="side-by-side">
      <div id="invisible-spacer-heading-line"></div>
      <h1 id="homepage-heading" className="appear-animation">Music Box</h1>
      <div id="music-theme-selector" className="appear-animation vertical-scroll">
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div> <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
        <div>Bruh</div>
        <div>BruhCore</div>
      </div>
    </div>

    <h2 id="homepage-subheading" className="appear-animation">Your One Stop Shop For</h2>
    <h3 id="homepage-sub-subheading" className="appear-animation">Music and Moods</h3>
    <h4 id="homepage-sub-sub-subheading" className="appear-animation">Want to see video credits? Scroll down!</h4>
    <AutoPlayer videoURL={"https://www.youtube.com/watch?v=-R0UYHS8A_A"} />

  </>);

  /*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/


}

export default App
