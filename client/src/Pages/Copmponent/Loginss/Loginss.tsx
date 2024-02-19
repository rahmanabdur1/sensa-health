import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuizeQuestion } from '../../../hooks/useQuizeQuestion';
import { useQuizData } from '../../../hooks/useQuizeData';


export function Loginss() {
  let navigate = useNavigate();
  const { categoryId, cat } = useParams();
  const [currentQuestionInd, setCurrentQuestionInd] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [quizData] = useQuizData(String(categoryId));

  const [currentQuestion] = useQuizeQuestion(String(categoryId), Number(cat));

  const shouldShowNextButton =(quizData && currentQuestion?.questionId === 2) || (quizData && currentQuestion?.questionId === 4)||  (quizData && currentQuestion?.questionId === 6) || (quizData && currentQuestion?.questionId === 7)  || (quizData && currentQuestion?.questionId === 8)  || (quizData && currentQuestion?.questionId === 9);

  const handleOptionClick = (option: any) => {
    if (!answers.includes(option)) {
      setAnswers((prevAnswers) => [...prevAnswers, option]);
      setIsNextButtonDisabled(false);
    }
    if (currentQuestionInd !== 2 && currentQuestionInd !== 4  && currentQuestionInd !== 6 && currentQuestionInd !== 7 && currentQuestionInd !== 8 && currentQuestionInd !== 9) {
      setIsNextButtonDisabled(true);
      setCurrentQuestionInd((prev) => prev + 1);
      navigate(`/${categoryId}/quize/${currentQuestionInd + 1}`);
    }
  };
    

  const handleOptionNextClick = () => {
    setIsNextButtonDisabled(true);

    if (quizData && quizData.questions) {
      const questions = quizData.questions;

      if (currentQuestionInd === questions.length) {
        navigate('/');
      } else {
        setCurrentQuestionInd((prev) => prev + 1);
        navigate(`/${categoryId}/quize/${currentQuestionInd + 1}`);
      
      }
    } 
  };

  return (
    <div className='questioncontainer'>
      <div>
        <h2>{currentQuestion?.question_text}</h2>
        {answers &&  <p>Selected Answer: 4.7 rating (2000+ reviews) {answers.join(', ')}</p>}
        <ul>
          {currentQuestion?.options.map((option, optionIndex) => (
            <li key={optionIndex} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
         
          ))}
        </ul>
      </div>

      {shouldShowNextButton && (
    <button
      disabled={isNextButtonDisabled}
      onClick={() => handleOptionNextClick()}
    >
      Next
    </button>
  )}
      
    </div>
  );
}
