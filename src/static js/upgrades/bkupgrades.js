const bk_upgrades = [
    {
        name: "Organic Ingredients",
        price: 12000,
        upgrade_name: "bk_$upgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/organic.png?alt=media&token=22189bce-e819-45ef-be8a-b478e59c9cea",
        bought: localStorage.getItem("bk_$upgrade1"),
        description: "Increases income from $20/click to $25/click",
    },
    {
        name: "Enriched Flour",
        price: 20000,
        upgrade_name: "bk_$upgrade2",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/flour.png?alt=media&token=4c3d1048-94f4-47a0-ab48-a96fc1154294",
        bought: localStorage.getItem("bk_$upgrade2"),
        description: "Doubles your income",
    }, 
    {
        name: "Bigger Ovens",
        price: 25000,
        upgrade_name: "bk_speedUpgrade1",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/oven.png?alt=media&token=96be225f-acf3-4e25-a400-f93b4dc2bbc9",
        bought: localStorage.getItem("bk_speedUpgrade1"),
        description: "Significantly increases baking speeds",
    }, 
    {
        name: "Ads",
        price: 35000,
        upgrade_name: "bk_$upgrade3",
        upgrade_name2: "bk_speedUpgrade2",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/ads.png?alt=media&token=e1534b97-64ef-4469-9891-7d918ceb92d5",
        bought: localStorage.getItem("bk_$upgrade3"),
        description: "Attracts more customers. Doubles baking speeds and increases income by $25/click",
    }, 
    {
        name: "Fancy Ingredients",
        price: 50000,
        upgrade_name: "bk_$upgrade4",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/hat.png?alt=media&token=a932b931-b19c-4270-a985-bd85907e66a7",
        bought: localStorage.getItem("bk_$upgrade4"),
        description: "Use those fancy ingredients! Doubles income",
    }, 
    {
        name: "Manager",
        price: 40000,
        upgrade_name: "bk_manager",
        img: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/tie.png?alt=media&token=e493d4df-0bef-48cf-80dc-c3e27a034474",
        bought: localStorage.getItem("bk_manager"),
        description: "Why waste time clicking a button when you can buy a slave to click for you?",
    }
]

export default bk_upgrades