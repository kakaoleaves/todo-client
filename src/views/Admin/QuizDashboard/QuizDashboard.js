import React, { useState } from "react";

export default function QuizDashboard() {
  // eslint-disable-next-line no-unused-vars
  const [quizList, setQuizList] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const getQuizList = async () => {
    const response = await fetch("http://localhost:3001/quiz");
    const data = await response.json();
    setQuizList(data);
  };

  return (
    <div>
      <table></table>
    </div>
  );
}
