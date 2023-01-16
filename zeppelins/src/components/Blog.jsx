import "../styles/blog.css";
import Twitter from "./icons/Twitter";
import Linkin from "./icons/Linkin";
import Medium from "./icons/Medium";

export default function Blog() {
  return (
    <div id="blog" className="container">
      <div className="blogText">
        <h1>Blog Posts</h1>
        <h2>I think so, this is it.</h2>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="linkBtns">
          <button className="twitterBtn">
            <Twitter />
            twitter
          </button>
          <button className="linkedinBtn">
            <Linkin />
            linkedin
          </button>
          <button className="mediumBtn">
            <Medium />
            medium
          </button>
        </div>
      </div>
      <img src="./images/illustration.png" alt="illustration"></img>
    </div>
  );
}
