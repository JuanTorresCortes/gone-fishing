const prompt = require("prompt-sync")({ sigint: true });

let fishCaught = [];
let totalWorms = 6;
let count = null;





//this function creates a fish and adds 1 to the count 
function createFish() {
  count++;

  const descriptor = [
    "one eyed",
    "dead",
    "tiny",
    "fat",
    "predatory",
    "elusive but highly succulent",
    "striking small",
    "aggressive",
    "masculine",
    "primitive",
    "savory",
    "rare and tasty",
    "top secret",
    "experimental and ultimately successful",
    "menacing",
    "nicely fried",
    "biggest",
    "spicy",
    "hostile",
    "coolest",
    "cold lousy",
    "on the endangered species list",
    "miserable",
    "stale",
    "blind",
    "boring",
    "dried-up",
    "unremarkable",
    "rotten",
    "slippery",
    "narrow-minded",
    "disabled",
    "stupid",
    "good for noting",
    "one size fits all",
    "glass half full type",
    "abusive",
    "annoying",
    "distasteful",
    "embarrassing",
    "horrible",
    "rude",
    "fake news",
    "communist",
    "unpredictable",
  ];

  const fishTypes = [
    "▶︎ blowfish 🐡",
    "▶︎ Alligator Gar 🐠",
    "▶︎ Barracuda 🐟",
    "▶︎ bass 🐠 ",
    "▶︎ tuna 🐟",
    "▶︎ catfish 🐠",
    "▶︎ gold fish 🐟",
    "▶︎ old rusty clam 🦪",
    "▶︎ Nemo 🐠",
    "▶︎ Little Mermaid",
    "▶︎ clown fish 🤡",
    "▶︎ crab 🦀",
    "▶︎ lobster 🦞",
    "▶︎ salmon 🐟",
    "▶︎ Seabass 🐠",
    "▶︎ shark 🦈",
    "▶︎ shrimp 🦐",
    "▶︎ holy mackerel 🐠",
    "▶︎ snapper 🐟",
    "▶︎ spearfish 🐠",
    "▶︎ squid 🦑",
    "▶︎ sunfish 🐠",
    "▶︎ swordfish 🐟",
    "▶︎ octopus 🐙",
    "▶︎ killer whale 🐳",
  ];
  let descriptor1 = descriptor[Math.floor(Math.random() * descriptor.length)];
  let descriptor2 = descriptor[Math.floor(Math.random() * descriptor.length)];
  let description = `${descriptor1} ${descriptor2}`;
  let fishName = fishTypes[Math.floor(Math.random() * fishTypes.length)];
  let weight = Math.floor(Math.random() * (5 - 1 + 1) + 1); // The maximum is inclusive and the minimum is inclusive
  let money = weight * 15;

  let fishItem = { description, fishName, weight, money };

  if (fishCaught.length === 0) {
    fishCaught.push(fishItem);
    myApp();
  } else if (fishCaught.length > 0) {
    catchOrRelease(fishItem);
  }
}

// this function catches or releases fish 
function catchOrRelease(fishItem) {
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  wormsLeft = totalWorms - count;

  let totalFishCaught = fishCaught.length;

let totalPrizeMoney = fishCaught.reduce(
  (acc, currentFish) => {
    return acc = currentFish.money;
  },0
);

let totalFishWeight = fishCaught.reduce(
  (acc, currentFish) => {
    return acc + currentFish.weight;
  },0
)


  
    console.log(`(total worms left: ▶︎${wormsLeft}◀︎), (total fish caught: ▶︎${totalFishCaught}◀︎), (total weight: ▶︎${totalFishWeight}◀︎), (total prize money: ▶︎${totalPrizeMoney}◀︎) `);


  console.log("=====================================================================================================\n");
  console.log(
    `⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️`);
  console.log(`          wow you caught a (${fishItem.description}) ${fishItem.fishName}`);
  console.log(`                        The weight = ${fishItem.weight}(lb)`);
  console.log(`                        the prize money = $${fishItem.money}`);
  console.log(
    `⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️\n`
  );
  console.log("=====================================================================================================\n");
  console.log(`would you like to keep the  ${fishItem.fishName} ?\n`);
  console.log(`[c]atch or [r]elease?\n`);
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  let userInput = prompt("▶︎");
     
  if(userInput === "c" || userInput === "C") {
    fishCaught.push(fishItem);
    myApp();
  } else if (userInput === "r" || userInput === "R") {
    myApp();
  }else { catchOrRelease(fishItem)}  
}

/// main game
function myApp() {  
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  wormsLeft = totalWorms - count;

  let totalFishCaught = fishCaught.length;

let totalPrizeMoney = fishCaught.reduce(
  (acc, currentFish) => {
    return acc = currentFish.money;
  },0
);

let totalFishWeight = fishCaught.reduce(
  (acc, currentFish) => {
    return acc + currentFish.weight;
  },0
)

  if (totalFishCaught.length !== 0) {
    
    console.log(`(total worms left: ▶︎${wormsLeft}◀︎), (total fish caught: ▶︎${totalFishCaught}◀︎), (total weight: ▶︎${totalFishWeight}◀︎), (total prize money: ▶︎${totalPrizeMoney}◀︎) `);
  }

  console.log("===========================================================================================\n");

  for (let i = 0; i < fishCaught.length; i++) {
    const currentFish = fishCaught[i];
    console.log(`${currentFish.description} ${currentFish.fishName}, weight = ${currentFish.weight}(lb), prize = $${currentFish.money}\n`);
  }

  console.log("===========================================================================================\n");
  wormsLeft = totalWorms - count;
  if (wormsLeft === 0 || totalFishWeight >= 10){
    endGame()
  } else if (wormsLeft > 0) {
    console.log(`▶︎ lets catch some more fish!! cast your line... [x]\n`);
    console.log(`▶︎ Or you can quit while you're ahead... [Q]\n`)
    console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);

    let userInput = prompt("▶︎");
    if (userInput === "x" || userInput === "X") {
      createFish();
    } else if(userInput === 'q' || userInput === 'Q'){
      endGame()
    }
     else if (userInput !== "x" || userInput !== "X" || userInput !== 'q' || userInput !== "Q" ) {
      myApp();
    }
  }
}

 ///resets game or exits;
function endGame(){
  
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
   
    wormsLeft = totalWorms - count
    let totalFishCaught = fishCaught.length;

    let totalPrizeMoney = fishCaught.reduce(
    (acc, currentFish) => {
      return acc = currentFish.money;
      },0
    );

    let totalFishWeight = fishCaught.reduce(
      (acc, currentFish) => {
        return acc + currentFish.weight;
      },0
    )
    console.log(`(total worms left: ▶︎${wormsLeft}◀︎), (total fish caught: ▶︎${totalFishCaught}◀︎), (total weight: ▶︎${totalFishWeight}◀︎), (total prize money: ▶︎$${totalPrizeMoney}◀︎) \n`);
    console.log("=====================================================================================================\n");
    if(wormsLeft === 0){
      console.log(`You have no worms left!!!\n`)
    }else if (totalFishWeight > 10){
      console.log(`You have exceeded weight limit\n`)
    }else { console.log(`good job you have made $${totalPrizeMoney} and stayed under the weight limit\n`)}
   
    console.log(`wold youu like to start a (New Game) or (Exit)\n`);
    console.log(`[N]ew Game or [E]xit\n`)

  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  let userInput = prompt(`▶︎`)
  if(userInput === 'n' || userInput === "N"){
    start();
  }else if (userInput === 'e' || userInput === "E"){
    console.log(`Thanks for playing Good Bye!!!!`);
  }  
}


start();

// starts the game and creates first fish by prompting the player to cast line
function start() {  
   
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
    fishCaught = [];
    totalFishWeight = 0;
    totalPrizeMoney = 0;
    count = 0;
    console.log(`You've gone fishing! Try to maximize the value of your caught fish. You only have
    six worms🪱  use them wisely and can catch at most 10 lbs of fish.\n`);
    console.log(`Hook that warm and cast that line, lets see what you catch! Press [x]\n`);
    console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);

    let firstCast = prompt(`▶︎`);
    if (firstCast == "x" || firstCast == "X") {
      createFish();
    } else {
      start();
    }
  
}
