import React from "react";

export const AppInput = ({ inputLable, inputPlaceholder, isRequired, inputType, id, errorText, inputValue, inputChange, hasError }) => {
    return (
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
            {inputLable}
            <input
                required={isRequired}
                type={inputType}
                name={id}
                id={id}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(e) => inputChange(e.target.value)}
            />
            
                {/* Введите номер в правильном формате например */}
                {hasError && <span id="error-message">{errorText}</span>}
            
        </label>
    );
};