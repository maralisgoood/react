import { Routes, Route } from 'react-router-dom';
import { MENUS, users } from './util/data';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  function loginCheck(userName, password) {
    // console.log("login check is running");
    // users.
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />}></Route>
        <Route path={MENUS[1].url} element={<About />}></Route>
        <Route path={MENUS[2].url} element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;