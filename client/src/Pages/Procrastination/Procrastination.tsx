
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Procrastination.css';
import { useQuizData } from '../../hooks/useQuizeData';
import { useState } from 'react';

export function Procrastination() {
  const { categoryId} = useParams();
  const [quizData, error] = useQuizData(String(categoryId));
  const [cat]=useState(1)


  let navigate=useNavigate()

  const handleGenderClick = () => {
        navigate(`/${categoryId}/quize/${cat}`)
  }

  if (error) {
    return <div className='questioncontainer'>Error loading quiz data: {error}</div>;
  }

  if (!quizData) {
    return <div className='questioncontainer'>Loading...</div>;
  }

  return (
    <div className='questioncontainer'>
      <Link to='/login'>login</Link>
        {quizData.category_name}
      <div>
        <button onClick={() => handleGenderClick()}>Male</button>
        <button onClick={() => handleGenderClick()}> Female</button>
        <button onClick={() => handleGenderClick()}> Others</button>
      </div>
    </div>
  );
}
