import "../styles/header.css";

export default function Header() {
  return (
    <header className="container">
      <img src="./images/logo.svg" alt="logo" />
      <div class="search-input">
        <input type="text" name="search" placeholder="Search any things" />
        <button type="button">Search</button>
      </div>
      <div className="user">
        <a href="#">
          <span>
            <img src="./images/user.svg" alt="user" />
          </span>
          Sign in
        </a>
        <a href="#">
          <img src="./images/shopping-cart.svg" alt="shopping" />
          <div className="orangeCircle">
            <p>0</p>
          </div>
        </a>
      </div>
    </header>
  );
}
