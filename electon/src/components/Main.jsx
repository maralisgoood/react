import "../styles/main.css";
import Ads from "./subComp/Ads";
import Brands from "./subComp/Brands";
import Navbar from "./subComp/Navbar";
import Products from "./subComp/Products";
import Slider from "./subComp/Slider";
import Special from "./subComp/Special";

export default function Main() {
    return (
        <main className="container">
                <Slider />
                <Navbar />
                <Products />
                <Ads/>
                <Special />
                <Brands/>
        </main>
    );
}