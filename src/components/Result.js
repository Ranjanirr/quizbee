import React from "react";

const Result = ({score, playAgain}) =>(
  <div className = "score-board" >
    <div className = "score"><p>You have scored {score} out of 5 points!</p></div>
    <button className = "playBtn" onClick = {playAgain}> Play it again </button>
  </div>
)
export default Result;
