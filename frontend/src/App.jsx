import { useState, useEffect } from 'react'
import FlashCardList from './FlashCardList'
import './app.css'
import axios from 'axios'
import Header from './Header'

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  useEffect(() => {
  getQuestions(10)  
  }, [])


  const getQuestions = (numberOfQuestions) => {
    axios
      .get(`http://localhost:3000/perguntas/${numberOfQuestions}`)
      .then(res => {
        console.log(res.data)
        setFlashCards(res.data.data.map((questionItem) => {
          const answer = questionItem.resposta
          const pergunta = questionItem.texto
          return {
            id: questionItem.id,
            question: pergunta,
            answer: answer,
          }
        }))
      })
  }




  return (
    <>
    <div>
      <Header subjects={['react', 'node', 'javascript']} onGoClick={console.log('cliquei')}/>
    </div>
    <div className='container'>
      <FlashCardList flashcards={flashcards} />
    </div>
    </>
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

export default App;
