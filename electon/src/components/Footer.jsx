import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <div className="ftrTop">
        <img src="./images/logo.svg" alt="logo" />
        <div className="icons">
            <a href="#"><img src="./images/google.png" alt="google" /></a>
            <a href="#"><img src="./images/facebook.png" alt="facebook" /></a>
            <a href="#"><img src="./images/whatsapp.png" alt="whatsapp" /></a>
        </div>
      </div>
      <div className="ftrBottom">
        <a href="#">&copy; 2023 Maral. Built using AQUA and Tuulai Theme</a>
        <a href="#">Terms and Conditions</a>
      </div>
    </footer>
  );
}