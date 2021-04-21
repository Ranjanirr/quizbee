import React from "react"
import {useState} from "react";

const QuestionBox = ({question, selected}) => {
  const [answer, setAnswer] = useState(question.answers)
  return (
    <div className = "questionBox">
      <div className="question">{question.question}</div>
      {/* Mapping all over the options, and text is a string*/}

      {answer.map((text, index) => 
        <button 
          key= {index} 
          className= "answerBtn" 
          onClick = {()=>{
            setAnswer([text])
            selected(text, question.correct)}}>
          {text}
         </button>
      )}
    </div>
  )
}

export default QuestionBox