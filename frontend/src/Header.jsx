import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ subjects, onGoClick }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [numQuestions, setNumQuestions] = useState(5);

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleGoClick = () => {
    onGoClick(selectedSubject, numQuestions);
  };

  return (
    <div className="header">
      <select value={selectedSubject} onChange={handleSubjectChange}>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={numQuestions}
        onChange={handleNumQuestionsChange}
        min="1"
        max="10"
      />
      <button onClick={handleGoClick}>Go</button>
    </div>
  );
};

Header.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGoClick: PropTypes.func.isRequired,
};

export default Header;
