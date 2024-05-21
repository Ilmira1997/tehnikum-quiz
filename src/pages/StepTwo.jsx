import React, { useState} from "react";
import {ProgressBar} from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { Answer } from "../components/Answer";
import { LinkButton } from "../components/LinkButton";
const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      labelText:"Frontend разработчик"
    },
    {
      id: "variant-2",
      labelText:"Python разработчик"
    },
    // {
    //   id: "variant-3",
    //   labelText:"Digital маркетолог"
    // },
    {
      id: "variant-4",
      labelText:"Mobilography"
    },
    {
      id: "variant-5",
      labelText:"Uzum seller"
    },
    // {
    //   id: "variant-6",
    //   labelText:"SMM-специалист"
    // },
    // {
    //   id: "variant-7",
    //   labelText:"SMM:для новичков"
    // },
    {
      id: "variant-8",
      labelText:"UX/UI дизайнер"
    },
    // {
    //   id: "variant-9",
    //   labelText:"Target full course"
    // },
    // {
    //   id: "variant-10",
    //   labelText:"Графический дизайн"
    // },
    {
      id: "variant-11",
      labelText:"Дата аналитик"
    },

  ]
  const [checkedAnswer, setCheckedAnswer]=useState(null)
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">        
          <ProgressBar/>
          <div className="question">
            <AppHeader headerText="На каком курсе вы обучаетесь ?" headerType="h2"/>
            <ul className="variants">
              {variants.map((elem)=>{
                return <Answer key={elem.id} id={elem.id} labelText={elem.labelText} onChange={()=>setCheckedAnswer(elem.id)} checked={checkedAnswer===elem.id}/>
              })}
            </ul>
            <LinkButton
              isDisabled={checkedAnswer === null}
              linkType="button"
              linkText="Далее"
              linkBtn="/step-three"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
