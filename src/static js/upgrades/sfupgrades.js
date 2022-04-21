const sf_upgrades = [
    {
        name: "Salmon",
        price: 1200,
        upgrade_name: "sf_$upgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/salmon.webp?alt=media&token=da674bd1-a319-4e7e-bc5b-40a5e871ce07",
        bought: localStorage.getItem("sf_$upgrade1"),
        description: "Increases seafood income from $5/click to $10/click",
    },
    {
        name: "Wild Caught",
        price: 2500,
        upgrade_name: "sf_$upgrade2",
        upgrade_name2: "sf_speedUpgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/wild-caught.png?alt=media&token=19f7ee58-dd96-4824-98a9-6b23f206bffc",
        bought: localStorage.getItem("sf_$upgrade2"),
        description: "Increases income from $10/click to $25/click. Slightly increases production speeds",
    }, 
    {
        name: "Mass Fishing",
        price: 5000,
        upgrade_name: "sf_speedUpgrade2",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/rod.png?alt=media&token=0ddfb12e-0c42-46a9-a441-f315597ee31e",
        bought: localStorage.getItem("sf_speedUpgrade2"),
        description: "Increases seafood production speeds",
    }, 
    {
        name: "Crab",
        price: 7500,
        upgrade_name: "sf_$upgrade3",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/crab.png?alt=media&token=ba7fc83c-2f4f-498d-ba2a-89194c94050b",
        bought: localStorage.getItem("sf_$upgrade3"),
        description: "Doubles your income. Seriously, crab isn't cheap",
    }, 
    {
        name: "Gold Lobster",
        price: 10000,
        upgrade_name: "sf_$upgrade4",
        upgrade_name2: "sf_speedUpgrade3",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/lobster.png?alt=media&token=5a2b71bc-0114-4fe1-939f-1daf628b7983",
        bought: localStorage.getItem("sf_$upgrade4"),
        description: "Golden lobster at atrocious prices. Doubles income and production speed",
    }, 
    {
        name: "Manager",
        price: 6000,
        upgrade_name: "sf_manager",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/tie.png?alt=media&token=e493d4df-0bef-48cf-80dc-c3e27a034474",
        bought: localStorage.getItem("sf_manager"),
        description: "Why waste time clicking a button when you can buy a slave to click for you?",
    }
]

export default sf_upgrades