import { useState, useEffect } from 'react'
import FlashCardList from './FlashCardList'
import './app.css'
import axios from 'axios'


function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        console.log('teste')
        setFlashCards(res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers.map(a =>
            decodeString(a)), answer]
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }

        }))
      })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }


  return (
    <div className='container'>
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      "Paris",
      "London",
      "Berlin",
      "Madrid"
    ],
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      "Paris",
      "London",
      "Berlin",
      "Madrid"
    ],

  }
]

export default App
