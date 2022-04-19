const ff_upgrades = [
    {
        name: "Fries",
        price: 10,
        upgrade_name: "ff_$upgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/fries.webp?alt=media&token=e5474898-4c2d-45c9-84db-710cd2b229b5",
        bought: localStorage.getItem("ff_$upgrade1"),
        description: "Increases fast food income from $1/click to $2/click"
    },
    {
        name: "Soda",
        price: 50,
        upgrade_name: "ff_$upgrade2",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/soda.png?alt=media&token=12272cda-9eae-4b46-a605-04da650c38b3",
        bought: localStorage.getItem("ff_$upgrade2"),
        description: "Increases fast food income from $2/click to $3/click"
    }, 
    {
        name: "Better Appliances",
        price: 100,
        upgrade_name: "ff_speedUpgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/stove.png?alt=media&token=33010402-6787-434f-ab03-97db9e72615f",
        bought: localStorage.getItem("ff_speedUpgrade1"),
        description: "Significantly increases fast food production speeds"
    }, 
    {
        name: "A5",
        price: 500,
        upgrade_name: "ff_$upgrade3",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/beef.png?alt=media&token=eb5944d3-2776-4c9b-9561-2a22b5b86751",
        bought: localStorage.getItem("ff_$upgrade3"),
        description: "Changes beef to A5 quality beef, increasing income from $3/click to $5/click"
    }, 
    {
        name: "Skilled Chefs",
        price: 1000,
        upgrade_name: "ff_$upgrade4",
        upgrade_name2: "ff_speedUpgrade2",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/hat.png?alt=media&token=a932b931-b19c-4270-a985-bd85907e66a7",
        bought: localStorage.getItem("ff_$upgrade4"),
        description: "Now you have slaves to help you cook. Significantly increases production speed and income"
    }, 
    {
        name: "Manager",
        price: 400,
        upgrade_name: "ff_manager",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/tie.png?alt=media&token=e493d4df-0bef-48cf-80dc-c3e27a034474",
        bought: localStorage.getItem("ff_manager"),
        description: "Why waste time clicking a button when you can buy a slave to click for you?"
    }
]

export default ff_upgrades