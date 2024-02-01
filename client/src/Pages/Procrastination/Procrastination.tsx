import { useState } from 'react';
import { useParams } from 'react-router';
import { useQuizData } from '../../hooks/useQuizeData';

export function Procrastination() {
    const { categoryId } = useParams();
    const [quizData, error] = useQuizData(Number(categoryId));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!quizData) {
        return <div>Loading...</div>;
    }

    const hasNextQuestion = currentQuestionIndex < quizData.questions.length - 1;

    const handleNextQuestion = () => {
        if (hasNextQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div>
            <div>
                <h2>{quizData.questions[currentQuestionIndex].question_text}</h2>
                <ul>
                    {quizData.questions[currentQuestionIndex].options.map((option, optionIndex) => (
                        <li key={optionIndex}>{option}</li>
                    ))}
                </ul>
            </div>
            {hasNextQuestion && (
                <button onClick={handleNextQuestion}>
                    Next Question
                </button>
            )}
        </div>
    );
}
