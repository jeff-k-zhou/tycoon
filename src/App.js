import { useState } from 'react';
import Swal from "sweetalert2"
import './App.css';
import business from "./static js/business.js"
import incomeSetter from './static js/incomeSetter';
import ff_upgrades from './static js/upgrades/ffupgrades';
import sf_upgrades from './static js/upgrades/sfupgrades';
import bk_upgrades from './static js/upgrades/bkupgrades';

function App() {
  var money = 0
  const [moneyS, setMoneyS] = useState(localStorage.getItem("money"))
  const [disabledFF, setDisabledFF] = useState(false)
  const [disabledSF, setDisabledSF] = useState(false)
  const [disabledBK, setDisabledBK] = useState(false)
  //eslint-disable-next-line
  const [selectFF, setSelectFF] = useState(eval(localStorage.getItem("ffs")))
  //eslint-disable-next-line
  const [selectSF, setSelectSF] = useState(eval(localStorage.getItem("sfs")))
  //eslint-disable-next-line
  const [selectBK, setSelectBK] = useState(eval(localStorage.getItem("bks")))
  var selectff, selectsf, selectbk;
  const ff_return = incomeSetter(0)
  const sf_return = incomeSetter(1)
  const bk_return = incomeSetter(2)

  if (selectFF === null) {
    setSelectFF(true)
    setSelectSF(false)
    setSelectBK(false)
  }

  if (moneyS === null) {
    money = 0
    setMoneyS(0)
    localStorage.setItem("money", 0)
  } else if (moneyS !== null) {
    money = localStorage.getItem("money")
    money = parseInt(money)
  }
  var i = 0
  const ff_move = (speed, income, id, manager) => {
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
          if (id === "Fast Food") {
            setDisabledFF(false)
          } else if (id === "Seafood") {
            setDisabledSF(false)
          } else if (id === "Bakery") {
            setDisabledBK(false)
          }
          money = parseInt(localStorage.getItem("money")) + income
          clearInterval(Id);
          i = 0;
          setMoneyS(money)
          elem.style.width = 0 + "%"
          localStorage.setItem("money", money)
          if (manager) {
            ff_move(spd, inc, iD, manage)
          }
        } else {
          if (id === "Fast Food") {
            setDisabledFF(true)
          } else if (id === "Seafood") {
            setDisabledSF(true)
          } else if (id === "Bakery") {
            setDisabledBK(true)
          }
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
  const buyTycoon = (price, tycoon_name) => {
    localStorage.setItem("money", money - price)
    localStorage.setItem(tycoon_name, true)
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
              if (index.bought) {
                return (
                  <div class={
                    index.name === "Fast Food" ? (selectFF ? "selected" : "industry") :
                      index.name === "Seafood" ? (selectSF ? "selected" : "industry") :
                        index.name === "Bakery" && (selectBK ? "selected" : "industry")
                  } onClick={() => {
                    if (index.name === "Fast Food") {
                      setSelectFF(true)
                      setSelectSF(false)
                      setSelectBK(false)
                      selectff = true
                      selectbk = false
                      selectsf = false
                      localStorage.setItem("ffs", selectff)
                      localStorage.setItem("sfs", selectsf)
                      localStorage.setItem("bks", selectbk)
                    } else if (index.name === "Seafood") {
                      setSelectSF(true)
                      setSelectFF(false)
                      setSelectBK(false)
                      selectff = false
                      selectbk = false
                      selectsf = true
                      localStorage.setItem("ffs", selectff)
                      localStorage.setItem("sfs", selectsf)
                      localStorage.setItem("bks", selectbk)
                    } else if (index.name === "Bakery") {
                      setSelectBK(true)
                      setSelectFF(false)
                      setSelectSF(false)
                      selectff = false
                      selectbk = true
                      selectsf = false
                      localStorage.setItem("ffs", selectff)
                      localStorage.setItem("sfs", selectsf)
                      localStorage.setItem("bks", selectbk)
                    }
                  }}>
                    <div class="top-div">
                      <img alt="icon" src={index.icon} class="ind-img" />
                      <h1 class="ind-header">{index.name} - $
                        {
                          index.name === "Fast Food" ? (ff_return) :
                            index.name === "Seafood" ? (sf_return) :
                              index.name === "Bakery" && (bk_return)
                        }
                        /click</h1>
                    </div>
                    <div class="bottom-div">
                      <button class="click" id={index.id} disabled={
                        index.name === "Fast Food" ? disabledFF :
                          index.name === "Seafood" ? disabledSF :
                            index.name === "Bakery" && disabledBK
                      } onClick={() => {
                        for (var j = index.speed_upgrades.length - 1; j >= 0; j--) {
                          for (var k = index.income_upgrades.length - 1; k >= 0; k--) {
                            if (index.speed_upgrades[j] && index.income_upgrades[k]) {
                              if (index.manager) {
                                if (index.name === "Fast Food") {
                                  setDisabledFF(true)
                                } else if (index.name === "Seafood") {
                                  setDisabledSF(true)
                                } else if (index.name === "Bakery") {
                                  setDisabledBK(true)
                                }
                              }
                              ff_move(index.upgrade_speed[j], index.upgrade_$[k], index.name, index.manager)
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
              } else {
                return (
                  <div class="industry">
                    <h1 class="ind-header">{index.name}</h1>
                    <div>
                      <button class="ind-buy" onClick={() => {
                        if (money >= index.price) {
                          buyTycoon(index.price, index.tycoon_name)
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Not Enough Money"
                          })
                        }
                      }}>${index.price}</button>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div class="upgrades">
            <h1 class="header">Upgrades</h1>
            <div class="upgrade-container" style={selectFF ? {} : { display: "none" }}>
              {ff_upgrades.map((index) => {
                return (
                  <div class="upgrade">
                    <h1 class="upgrade-title">{index.name}</h1>
                    <img alt="upgrade" src={index.img} class="upgrade-icon" />
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
            <div class="upgrade-container" style={selectSF ? {} : { display: "none" }}>
              {sf_upgrades.map((index) => {
                return (
                  <div class="upgrade">
                    <h1 class="upgrade-title">{index.name}</h1>
                    <img alt="upgrade" src={index.img} class="upgrade-icon" />
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
            <div class="upgrade-container" style={selectBK ? {} : { display: "none" }}>
              {bk_upgrades.map((index) => {
                return (
                  <div class="upgrade">
                    <h1 class="upgrade-title">{index.name}</h1>
                    <img alt="upgrade" src={index.img} class="upgrade-icon" />
                    <p class="des">{index.description}</p>
                    {
                      index.bought ? <button class="bought">Purchased</button> :
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
    </div >
  );
}

export default App;
