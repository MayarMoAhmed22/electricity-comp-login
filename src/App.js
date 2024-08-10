import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./Components/LogIn/LogIn";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [showSplash, setshowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setshowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return <div className="App">{showSplash ? <SplashScreen /> : <LogIn />}</div>;
}

export default App;
