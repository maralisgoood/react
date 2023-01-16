import React from "react";
import "../../styles/main.css";
import SingleResult from "./SingeResult";

const results = [
  {
    title: "Component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th ",
    vote: 1018,
    answer: 21,
    view: 1400,
  },
  {
    title: "Force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 1868,
    answer: 82,
    view: 1700,
  },
  {
    title: "Rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 937,
    answer: 25,
    view: 5920,
  },
  {
    title: "React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 1738,
    answer: 18,
    view: 2470,
  },
];

export default function Mainbar() {
  return (
    <div id="mainbar">
      <div id="headline">
        <div className="top">
          <h1>All Questions</h1>
          <button className="blueBtn">Ask Question</button>
        </div>
        <div className="bottom">
          <p>241 questions with bounties</p>
          <button className="lightBtn">Filter</button>
        </div>
      </div>

      <SingleResult
        title={results[0].title}
        description={results[0].description}
        vote={results[0].vote}
        answer={results[0].answer}
        view={results[0].answer}
      />

      <SingleResult
        title={results[1].title}
        description={results[1].description}
        vote={results[1].vote}
        answer={results[1].answer}
        view={results[1].answer}
      />

      <SingleResult
        title={results[2].title}
        description={results[2].description}
        vote={results[2].vote}
        answer={results[2].answer}
        view={results[2].answer}
      />

      <SingleResult
        title={results[3].title}
        description={results[3].description}
        vote={results[3].vote}
        answer={results[3].answer}
        view={results[3].answer}
      />
    </div>
  );
}
