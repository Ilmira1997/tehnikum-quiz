import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { Answer } from "../components/Answer";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const variants = [
    {
      id: "variant-1",
      image: <img src="./img/laugh.png" alt="laugh" />,
      labelText: "Ваш ответ 1"
    },
    {
      id: "variant-2",
      image: <img src="./img/hearts.png" alt="hearts" />,
      labelText: "Ваш ответ 2"
    },
    {
      id: "variant-3",
      image: <img src="./img/smirk.png" alt="smirk" />,
      labelText: "Ваш ответ 3"
    },
    {
      id: "variant-4",
      image: <img src="./img/fright.png" alt="fright" />,
      labelText: "Ваш ответ 4"
    }
  ];

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar />
          <div className="question">
            <AppHeader headerText="3. Занимательный вопрос" headerType="h2" />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <Answer
                  key={elem.id}
                  id={elem.id}
                  labelText={elem.labelText}
                  onChange={() => setCheckedAnswer(elem.id)}
                  checked={checkedAnswer === elem.id}
                  image={elem.image} 
                />
              ))}
            </ul>
            <LinkButton
              isDisabled={checkedAnswer === null} 
              linkType="button"
              linkText="Далее"
              linkBtn="/step-four"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
