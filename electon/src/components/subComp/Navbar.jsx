import "../../styles/main.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>Popular products</h3>
      <nav>
        <ul>
            <li className="active"><a href="#">Cameras</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Tablets</a></li>
            <li><a href="#">Mouse</a></li>
            <li><a href="#">Sale</a></li>
        </ul>
      </nav>
    </div>
  );
}
