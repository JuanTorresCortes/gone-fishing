let fish = [
    {
        name: 'nemo',
        weight: 1,
        cost: 3,
    },
    {
        name: 'dory',
        weight: 2,
        cost: 5,
    },
    {
        name: 'crab',
        weight: 4,
        cost: 4,
    },
]

let allWeight = fish.reduce(
    (acc, currentFish) => {
        return acc + currentFish.weight
    },0
    );
let allCost = 0;

function cons (){
    console.log(`there are (${fish.length}) in the aquarium`);
    console.log(`the combine weight is ${allWeight}`);
    console.log(`the total cost of all fish is ${allCost}`)

}
cons()