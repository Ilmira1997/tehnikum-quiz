import React, { useState, useEffect} from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import {useNavigate} from "react-router-dom";
const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const [nameError, setNameError]=useState(false)
  const [phoneError, setPhoneError]=useState(false)
  const [buttonError, setButtonError]=useState(true)
  const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
  const numberRegex = /^\d+$/;

  const handleClick = ()=>{
    if(!nameRegex.test(name)) {
      setNameError(true)
    }
    else if(!numberRegex.test(phone)) {
      setPhoneError(true)
    }
    else{
      setNameError(false)
      setPhoneError(false)
      navigate("/step-one")
    }


  }
  useEffect(()=>{
    if(!name || !phone){
      setButtonError(true)
    }
    else{
      setButtonError(false)
    }
  },[name, phone])
    
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader headerText = "Добро пожаловать в квиз от лучшего учебного центра" headerType = "h1"/>
          <form className="welcome__form">
            <AppInput inputLable="Ваше имя" inputPlaceholder="Ваш ответ" inputType="text" id="username" errorText="Введите имя в правильном формате" inputValue={name} inputChange={setName} hasError={nameError}/>
            <AppInput inputLable="Ваш номер" inputPlaceholder="+998-9" inputType="tel" id="phone" errorText="Введите номер в правильном формате например" inputValue={phone} inputChange={setPhone} hasError={phoneError}/>
            
            <AppButton isDisabled={buttonError} buttonType="button" buttonText="Далее" onClick={handleClick}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
