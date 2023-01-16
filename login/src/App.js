import './App.css';
import { useState } from 'react';
import Profile from "./components/Profile";
import WelcomePage from "./components/WelcomePage";

const users = [
  { name: "anu", password: "asd" },
  { name: "maral", password: "dsa" },
  { name: "buynaa", password: "hello" },
  { name: "haliun", password: "halo" },
  { name: "mandakh", password: "yuen" },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function loginHandler(userName, password) {
    console.log("username: ", userName);
    console.log("password: ", password);
    if (userName === "anu" && password === "asd") {
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", userName)
    } else {
      console.error("wrong password or username");
    }
  }

  return (
    <div className="container">
      <div className="App">
        {isLoggedIn ? 
        <Profile setIsLoggedIn={setIsLoggedIn} /> : 
        <WelcomePage setLogin={loginHandler} />}
      </div>
    </div>
  );
}

export default App;
