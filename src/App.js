import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Routing from "./Routing/Routing";

export const loginStatus = createContext();
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <loginStatus.Provider value={[login, setLogin]}>
          <Routing />
        </loginStatus.Provider>
      </div>
      <Footer />
    </>
  );
};

export default App;
