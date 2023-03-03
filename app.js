const prompt = require("prompt-sync")({ sigint: true });

let fishCaught = [{1:2}];
let totalFishCaught = fishCaught.filter(item => item.status === '0').length;
let totalPrizeMoney = 0;
let totalFishWeight = 0;
let totalWorms = 6;
let count = 0;



function createFish() {

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

    let fishItem = {description, fishName, weight, money}

    if(fishCaught.length === 0){
      fishCaught.push(fishItem);
      count++
      myApp()
    }else if(fishCaught.length > 0){
      count++
      catchOrRelease(fishItem);
    }
   
}

function catchOrRelease(fishItem){
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);

  let tracker = (`(total worms left: ▶︎${totalWorms - count}◀︎), (total fish caught: ▶︎${totalFishCaught}◀︎), (total weight: ▶︎${totalFishWeight}◀︎), (total prize money: ▶︎${totalPrizeMoney}◀︎) `);
  console.log(`${tracker}\n`);

  console.log('=====================================================================================================\n')
  console.log(`⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️`)
  console.log(`          wow you caught a (${fishItem.description}) ${fishItem.fishName}`);
  console.log(`                        The weight = ${fishItem.weight}(lb)`);
  console.log(`                        the prize money = $${fishItem.money}`);
  console.log(`⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️\n`)
  console.log('=====================================================================================================\n')
  console.log(`would you like to keep the  ${fishItem.fishName} ?\n`);
  console.log(`keep in mind the weight limit, if you keep this fish your total weight will be ${totalFishWeight + fishItem.weight}(lb)\n`)
  console.log(`[c]atch or [r]elease?\n`);
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  let userInput = prompt('▶︎')
  

  if(userInput === 'c'){
    fishCaught.push(fishItem);
    count++;
    myApp();
  }else if(userInput === 'r'){
    count++;
    myApp()
  }
}

function myApp() {
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
  let tracker = (`(total worms left: ▶︎${totalWorms - count}◀︎), (total fish caught: ▶︎${totalFishCaught}◀︎), (total weight: ▶︎${totalFishWeight}◀︎), (total prize money: ▶︎${totalPrizeMoney}◀︎) `);
  console.log(`${tracker}\n`);

  console.log('===========================================================================================\n')

  if(fishCaught.length > 1){
    for(const fish of fishCaught){
      console.log(`${fish.description} ${fish.fishName}, weight = ${fish.weight}(lb), prize = $${fish.money}\n`)
    }
  }
  
  console.log('===========================================================================================\n')

  if(totalWorms-count < 0){
    console.log(`You have no worms left`)
  }
  console.log(`lets get some more!! cast your line.. [x]`);
  let userInput = prompt('▶︎') 
  if (userInput === 'x'){
    createFish();
  }else if (userInput !== 'x'){
    myApp();
  }

  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
}

start()

function start(){
  console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 GONE FISHING 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);

  if (totalFishWeight === 0 && totalPrizeMoney === 0 && totalWorms === 6) {
    console.log(`You've gone fishing! Try to maximize the value of your caught fish. You only have
    six worms🪱  use them wisely and can catch at most 10 lbs of fish.\n`);
    console.log(`Hook that warm and cast that line, lets see what you catch! Press [x]\n`)
    console.log(`🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n`);
    let firstCast = prompt(`▶︎`)
      if(firstCast == 'x' || firstCast == 'X'){
      createFish()
      }else{start()}
  }
}