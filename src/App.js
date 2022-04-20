import { useState } from 'react';
import Swal from "sweetalert2"
import './App.css';
import business from "./static js/business.js"
import incomeSetter from './static js/incomeSetter';
import ff_upgrades from './static js/upgrades/ffupgrades';

function App() {
  var money = 0
  const [moneyS, setMoneyS] = useState(localStorage.getItem("money"))
  const [disabledFF, setDisabledFF] = useState(false)
  const ff_return = incomeSetter(0)

  if (moneyS === null) {
    money = 0
    setMoneyS(0)
  } else if (moneyS !== null) {
    money = localStorage.getItem("money")
    money = parseInt(money)
  }
  var i = 0
  const move = (speed, income, id, manager) => {
    const spd = speed;
    const inc = income;
    const iD = id;
    const manage = manager;
    if (i === 0) {
      i = 1;
      var elem = document.getElementById(id);
      var width = 1;
      var Id = setInterval(frame, speed);
      function frame() {
        if (width >= 100) {
          clearInterval(Id);
          i = 0;
          money = money + 1
          elem.style.width = 0 + "%"
          console.log(money)
          localStorage.setItem("money", money)
          setMoneyS(money)
          if (manager) {
            move(spd, inc, iD, manage)
          }
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  const buy = (upgrade_name, upgrade_name2, price) => {
    if (!upgrade_name2) {
      localStorage.setItem(upgrade_name, true)
    } else if (upgrade_name) {
      localStorage.setItem(upgrade_name, true)
      localStorage.setItem(upgrade_name2, true)
    }
    localStorage.setItem("money", money - price)
    window.location.reload(false)
  }
  return (
    <div class="container">
      <h1 class="title">Restaurant Tycoon</h1>
      <div class="game">
        <div class="money">
          <h1 class="value">$ {moneyS}</h1>
        </div>
        <div class="main">
          <div class="tycoons">
            <h1 class="header">Businesses</h1>
            {business.map((index) => {
              return (
                <div class="industry">
                  <div class="top-div">
                    <img alt = "icon" src={index.icon} class="ind-img" />
                    <h1 class="ind-header">{index.name} - $
                      {ff_return}
                      /click</h1>
                  </div>
                  <div class="bottom-div">
                    <button class="click" id={index.id} disabled={index.name === "Fast Food" && (disabledFF)} onClick={() => {
                      for (var j = index.speed_upgrades.length - 1; j >= 0; j--) {
                        for (var k = index.income_upgrades.length - 1; k >= 0; k--) {
                          if (index.speed_upgrades[j] && index.income_upgrades[k]) {
                            if (index.manager) {
                              setDisabledFF(true);
                              console.log(disabledFF)
                            }
                            move(index.upgrade_speed[j], index.upgrade_$[k], index.name, index.manager)
                          }
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
            <h1 class="header">Upgrades</h1>
            <div class="upgrade-container">
              {ff_upgrades.map((index) => {
                return (
                  <div class="upgrade">
                    <h1 class="upgrade-title">{index.name}</h1>
                    <img alt = "upgrade" src={index.img} class="upgrade-icon" />
                    <p class="des">{index.description}</p>
                    {index.bought ? <button class="bought">Purchased</button> :
                      <button class="buy" onClick={() => {
                        if (money >= index.price) {
                          buy(index.upgrade_name, index.upgrade_name2, index.price)
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Not Enough Money",
                          })
                        }
                      }}>${index.price}</button>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
