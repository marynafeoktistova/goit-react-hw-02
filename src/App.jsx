import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import css from './App.module.css';

import { useState, useEffect } from 'react';

function App() {
  const typeRewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('saved-values');
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return typeRewiews;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedbackButton = () => setValues(typeRewiews);

  return (
    <section className={css.container}>
      <Description />
      <Options onClickFeedback={feedbackType => updateFeedback(feedbackType)} resetFeedback={totalFeedback >= 1} resetButton={resetFeedbackButton} />
      {totalFeedback >= 1 && <Feedback feedbackObj={values} feedbackTotal={totalFeedback} feedbackPositive={positiveFeedback} />}
      {totalFeedback < 1 && <Notification />}
    </section>
  );
}

export default App;
