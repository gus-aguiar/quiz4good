import PropTypes from "prop-types"

import FlashCard from './FlashCard'

export default function FlashCardList({ flashcards }) {
  return (
    <div className='card-grid'>
      {
        flashcards.map(flashcard => { return <FlashCard flashcard={flashcard} key={flashcard.id} /> })

      }
    </div>
  )
}

FlashCardList.propTypes = {
  flashcards: PropTypes.shape({
    map: PropTypes.func
  })
}
