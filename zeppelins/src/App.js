import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Blog />
      <Cards />
      <Footer/>
    </div>
  );
}

export default App;
