import "../styles/cards.css";
import { data } from "../util/Data";
import Category from "./Category";
import SingleCard from "./singleCard";

export default function Cards(props) {
  return (
    <div className="container category">
      <Category />
      <div className="container">
        <SingleCard data={data[0]} />
        <SingleCard data={data[1]} />
        <SingleCard data={data[2]} />
        <SingleCard data={data[3]} />
        <SingleCard data={data[4]} />
        <SingleCard data={data[5]} />
      </div>
    </div>
  );
}
