import { useState } from 'react'
import './App.css';
import QuestionOne from './components/QuestionOne'
import QuestionTwo from './components/QuestionTwo'

function App() {
  const [questionNumber, setQuestionNumber] = useState(2)



  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setQuestionNumber(1)}>Question 1</li>
          <li onClick={() => setQuestionNumber(2)}>Question 2</li>
        </ul>
      </nav>
      <div className="body">
      {questionNumber === 1 ? <QuestionOne /> : null}
      {questionNumber === 2 ? <QuestionTwo /> : null}
      </div>
    </div >
  );
}

export default App;
