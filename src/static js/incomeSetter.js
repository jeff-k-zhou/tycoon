import business from "./business";

function incomeSetter (index) {
    for (var a = business[index].income_upgrades.length; a >= 0; a--) {
        if (business[index].income_upgrades[a]) {
            return business[index].upgrade_$[a]
        }
    }
}

export default incomeSetter