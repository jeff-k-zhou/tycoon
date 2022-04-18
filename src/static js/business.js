const business = [
    {
        name: "Fast Food",
        starting_income: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/burger.png?alt=media&token=24acc374-2ff1-440b-9bd0-b79006d0f178",
        init_speed: 10,
        upgrade_status: [localStorage.getItem("ff_upgrade1"), localStorage.getItem("ff_upgrade2"), localStorage.getItem("ff_upgrade3"), localStorage.getItem("ff_upgrade4"), localStorage.getItem("ff_upgrade5")],
        upgrade_speed: [10,10,5,5,1],
        upgrade_$: [2,3,3,5,10]
    },
]

export { business }