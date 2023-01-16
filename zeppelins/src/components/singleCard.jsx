import "../styles/cards.css";

export default function SingleCard(props) {
    return (
        <div id="singleCard">
            <img src={props.data.image} />
            <p className="date">jan 05 2023</p>
            <h3>{props.data.title}</h3>
            <p>{props.data.description.slice(0, 300)}...</p>
            <a href="#">read more</a>
        </div>
    );
}