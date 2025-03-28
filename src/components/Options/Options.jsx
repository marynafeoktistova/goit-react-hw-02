import css from './Options.module.css';

const Options = ({ onClickFeedback, resetFeedback, resetButton }) => {
  return (
    <ul className={css.buttonList}>
      <li>
        <button className={css.mainButton} onClick={() => onClickFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={css.mainButton} onClick={() => onClickFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.mainButton} onClick={() => onClickFeedback('bad')}>
          Bad
        </button>
      </li>
      {resetFeedback >= 1 && (
        <li>
          <button className={css.mainButton} onClick={resetButton}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
