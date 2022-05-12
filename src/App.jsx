import numeral from "numeral";
import { useState } from "react";
import "./App.scss";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <div className="numeraljs">
      <h2>
        Write the number into input field - numeraljs will transform the number
      </h2>
      <div className="forms">
        <div className="formData-1">
          <div className="firstNumber">
            Written First Number : {firstNumber}
          </div>
          <div>
            Transformed First Number : {numeral(firstNumber).format("0,0a")}{" "}
          </div>

          <form>
            <div className="row">
              <div className="data">
                <input
                  type="text"
                  value={firstNumber}
                  onChange={(e) => setFirstNumber(e.target.value)}
                />
              </div>
              <div className="label">Write a number to transform</div>
            </div>
          </form>
        </div>
        <div className="formData-2">
          <div className="secondnumber">
            Written Second Number: {secondNumber}
          </div>
          <div>
            Transformed Second Number : {numeral(secondNumber).format("0,0a")}
          </div>

          <form>
            <div className="row">
              <div className="data">
                <input
                  type="text"
                  value={secondNumber}
                  onChange={(e) => setSecondNumber(e.target.value)}
                />
              </div>
              <div className="label">Write second number here to transform</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
