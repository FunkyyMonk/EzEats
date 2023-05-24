import React from "react";
import { useState } from "react";
import "./App.css";
import Step0 from "./home.js";
import Step1 from "./cuisine.js";
import Step2 from "./diet.js";
import Header from "./header";
import Step3 from "./results.js";


export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [firstStepOption, setFirstStepOption] = useState("initial");
  const [secondStepOption, setSecondStepOption] = useState("second");
  const [thirdStepOption, setThirdStepOption] = useState("third");
  return (
    <div className="backgroundImg">
      <Header />
      <div className="whiteRectangle">
        {currentPage === 0 && (
          <Step0
            setValue={setFirstStepOption}
            nextPage={() => setCurrentPage(1)}
          />
        )}
        {currentPage === 1 && (
          <Step1
            setValue={setFirstStepOption}
            nextPage={() => setCurrentPage(2)}
          />
        )}
        {currentPage === 2 && (
          <Step2
            setValue={setSecondStepOption}
            nextPage={() => setCurrentPage(3)}
          />
        )}
        {currentPage === 3 && (
          <Step3 option1={firstStepOption}
            option2={secondStepOption}></Step3>
        )}
      </div>
    </div>
  );
}