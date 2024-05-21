import React from "react";

export const AppButton = ({buttonText, isDisabled, buttonType, onClick})=>{
    return (
        <div>
            <button disabled={isDisabled} type={buttonType === "submit" ? "submit" : "button"} id="next-btn" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};