import { useState } from 'react';
import './App.css';
import { business } from "./static js/business.js"

function App() {
  const [money, setMoney] = useState(localStorage.getItem("money"))
  if (money === null) {
    setMoney(0)
  }
  var i = 0
  const move = (speed, income, id) => {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById(id);
      var width = 1;
      var id = setInterval(frame, speed);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          setMoney(prevMoney => parseInt(prevMoney) + income)
          elem.style.width = 0 + "%"
          localStorage.setItem("money", parseInt(money) + income)
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
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
            <h1 class="header">Businesses</h1>
            {business.map((index) => {
              return (
                <div class="industry">
                  <div class="top-div">
                    <img src={index.icon} class="ind-img" />
                    <h1 class="ind-header">{index.name} - $
                    {index.upgrade_status[0] === "true" && (index.upgrade_$[0])}
                    {index.upgrade_status[1] === "true" && (index.upgrade_$[1])}
                    {index.upgrade_status[2] === "true" && (index.upgrade_$[2])}
                    {index.upgrade_status[3] === "true" && (index.upgrade_$[3])}
                    {index.upgrade_status[4] === "true" && (index.upgrade_$[4])}
                    {!index.upgrade_status[0] && !index.upgrade_status[1] && !index.upgrade_status[2] && !index.upgrade_status[3] && !index.upgrade_status[4] && (index.starting_income)}
                      /click</h1>
                  </div>
                  <div class="bottom-div">
                    <button class="click" onClick={() => {
                      for (var j = 0; j <= index.upgrade_status.length; j++) {
                        if (index.upgrade_status[j] === "true") {
                          move(index.upgrade_speed[j], index.upgrade_$[j], index.name)
                        } else {
                          move(index.init_speed, index.starting_income, index.name)
                        }
                      }
                    }}>CLICK</button>
                    <div class="progress">
                      <div class="bar" id={index.name}></div>
                    </div>
                  </div>
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
