import './App.css';
import React from "react";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Pages/Home';
import RightContext from './components/RightContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Laespumita from './Pages/Laespumita';
import FloatingWSP from './components/FloatingWSP';

function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);
  const [shadowScroll, setShadowScroll] = React.useState(true);
  const [context, setContext] = React.useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  /*const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.clientX,
      y: event.clientY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };
  const hideContext = (event) => {
    setContext(false);
  };

  onscroll = (event) => {
    setContext(false);
    setIsActive(false)
  };

  const [chosen, setChosen] = React.useState();
  const initMenu = (chosen) => {
    setChosen(chosen);
  };*/

  /* <RightContext showNav={showNav} hideContext={hideContext} context={context} xYPosistion={xYPosistion} initMenu={initMenu}/>
  ESTO ES EL MENU DEL CLICK DERECHO, VA DENTRO DE ROUTER */

  return (
    <div className="App" 
    /*onContextMenu={showNav}
  onClick={hideContext}*/
  
    >
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar setIsActive={setIsActive} isActive={isActive} isPhone={isPhone} setIsPhone={setIsPhone} shadowScroll = {shadowScroll} setShadowScroll={setShadowScroll}/>
      <FloatingWSP />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Home />} />
          <Route path="/todo" element={<Home />} />
          <Route path="/laespumita" element={<Laespumita />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
