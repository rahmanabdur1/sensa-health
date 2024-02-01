import  { useEffect, useState } from 'react';


interface QuizData {
  category_name: string;
  category_id: number;
  questions: Array<Question>;
}

interface Question {
  question_text: string;
  options: Array<string>;
  correct_option: number | null;
}

export function useQuizData(categoryId: number) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/procrastination/${categoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: QuizData = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setError('Error fetching quiz data');
      }
    };

    fetchData();
  }, [categoryId]);

  return [quizData, error] as const;
}

