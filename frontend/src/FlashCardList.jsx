import { useState } from "react";
import PropTypes from "prop-types";
import FlashCard from "./FlashCard";

export default function FlashCardList({ flashcards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    if (currentCardIndex === flashcards.length - 1) {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="card-grid">
      <FlashCard flashcard={flashcards[currentCardIndex]} />
      <button onClick={handleNextCard}>Próximo</button>
    </div>
  );
}

FlashCardList.propTypes = {
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Outras propriedades dos flashcards aqui, caso existam
    })
  ).isRequired,
};
