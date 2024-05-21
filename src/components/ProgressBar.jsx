import React from "react"
export const ProgressBar = ({currentStep}) => {
    return (
        <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
    )
}

// import React from "react";

// export const ProgressBar = ({ currentStep }) => {
//   const totalSteps = 5;
//   return (
//     <div className="indicator">
//       <div className="indicator__text">
//         <span className="indicator__description">
//           Скидка за прохождение опроса:
//         </span>
//         <span className="indicator__value">15%</span>
//       </div>
//       <div className="indicator__progressbar">
//         {Array.from({ length: totalSteps }).map((_, index) => (
//           <div
//             key={index}
//             className={`indicator__unit indicator__unit-${index + 1} ${
//               index < currentStep ? "_active" : ""
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };
