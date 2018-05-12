import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
    <div className="jumbotron text-center">
        <div className="lead">
            <span>Score: {props.score} </span><span>| Top Score: {props.topScore} </span>
            <br/>
            <br/>
            <p>{props.message}</p>
        </div>
    </div>
);

export default ScoreCard;
