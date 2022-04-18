import { useState } from 'react';
import './App.css';
import { business } from "./static js/business.js"

function App() {
  const [money, setMoney] = useState(localStorage.getItem("money"))
  if (money === null) {
    setMoney(0)
  }
  return (
    <div class="container">
      <h1 class="title">Restaurant Tycoon</h1>
      <div class="game">
        <div class="money">
          <h1 class="value">$ {money}</h1>
        </div>
        <div class="main">
          <div class="tycoons">
            {business.map((index) => {
              return (
                <div class="industry">
                  <div class = "top-div">
                    <img src={index.icon} class="ind-img" />
                    <h1 class="ind-header">{index.name} - ${index.starting_income}/click</h1>
                  </div>
                  <div class = "bottom-div"></div>
                </div>
              )
            })}
          </div>
          <div class="upgrades">
            fizzbuzz
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
