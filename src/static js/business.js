const business = [
    {
        name: "Fast Food",
        icon: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/burger.png?alt=media&token=24acc374-2ff1-440b-9bd0-b79006d0f178",
        income_upgrades: [true, localStorage.getItem("ff_$upgrade1"), localStorage.getItem("ff_$upgrade2"), localStorage.getItem("ff_$upgrade3"), localStorage.getItem("ff_$upgrade4")],
        speed_upgrades: [true, localStorage.getItem("ff_speedUpgrade1"), localStorage.getItem("ff_speedUpgrade2")],
        upgrade_speed: [10,5,1],
        upgrade_$: [1,2,3,5,10],
        manager: localStorage.getItem("ff_manager")
    },
]

export default business