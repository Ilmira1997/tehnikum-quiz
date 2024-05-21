import React, { useState, useEffect } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppInput } from "../components/AppInput";
import { LinkButton } from "../components/LinkButton";

const StepOne = () => {
  const [answer, setAnswer] = useState("");
  const [buttonError, setButtonError] = useState(true);

  const handleInputChange = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    setButtonError(!answer);
  }, [answer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос" headerType="h2" />
            <AppInput
              inputPlaceholder="Ваш ответ"
              inputType="text"
              id="username"
              inputValue={answer}
              inputChange={handleInputChange}
            />
            <LinkButton
              isDisabled={buttonError}
              linkType="button"
              linkText="Далее"
              linkBtn="/step-two"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
