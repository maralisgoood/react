import "../../styles/main.css";

export default function Ads() {
  return (
    <div className="ads">
      <div className="adsText">
        <button className="orangeBtn">New laptop</button>
        <h2>Sale up to 50% off</h2>
        <p>12 inch hd display</p>
        <button className="orangeBtn">Shop now</button>
      </div>
      <div className="adsImg">
        <img src="./images/ads.png" alt="ads" />
      </div>
    </div>
  );
}
