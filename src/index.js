import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom"
import "./assets/style.css"
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox"
import Result from "./components/Result"
var QuizBee = () => {
    var [questionBank, changeQuestions] = useState([])
    var [done, changeDone] = useState(false);
    var [correct, changeCorrect] = useState(0)
    var clickCount = 0;
    var correctAnswers = 0;
    var getQuestions = () => {
        quizService().then(question =>{
            changeQuestions(question)
            console.log("Question: "+ question)
            console.log(questionBank)

        });
    }
    var playAgain = () =>{
       //should be called when the button on result is clicked
       changeDone(false)
       clickCount = 0
       correctAnswers = 0
       changeCorrect(correctAnswers)
       changeQuestions([])
       getQuestions()
    }
  
    var computeAnswer = (answer, correctAnswer) => {
    //This is the placeholder for the selected function
        clickCount = clickCount + 1
        console.log(clickCount)
        if (answer === correctAnswer){
            correctAnswers = correctAnswers + 1
            console.log(correctAnswers)
        }
        if (clickCount === 5){
            console.log("result should be called")
            changeDone(true)
            changeCorrect(correctAnswers)
        }
    }
    useEffect( () => {
        getQuestions()
    }, [])
    //Here you should return a question box with the question and the options
    
     return (
        <div className = "container">
        { done ?  <Result score = {correct} playAgain = {playAgain}/>
        : questionBank.map((question, index) =>{
                
              return (
              <QuestionBox 
                question= {question}
                selected = {computeAnswer}
                key = {index}/>
                ) 
            })}

        </div>  
    )
}

ReactDOM.render(<QuizBee/>, document.getElementById("root")) 