
  
let jokes=[` What’s blue and smells like red paint? Blue paint.`,`Where do vampires keep their money? A blood bank.`,` How do porcupines kiss? Carefully!`,`Why are fish so intelligent? Because they live in schools!`,` What kind of music do bubbles hate? Pop.`,` What do you call a dog magician? A labracadabrador.`,` What did the triangle say to the circle? You’re pointless!`,` What kind of fish loves going to war? A swordfish.`,` Why can’t your hand be 12 inches long? Because then it’d be a foot.`,` Why couldn't the pony sing a lullaby? She was a little horse.`,` What’s a parent’s favorite Christmas carol? Silent Night.`,` Where do woodland birds invest their money? The stork-market.`,` What do you call a bear with no teeth? A gummy bear.`,` What do you call a fake noodle? An impasta.`,` Can February March? No, but April May!`]



let randomJoke=()=>{
  let random=Math.floor(Math.random()*(jokes.length-1))
  document.getElementById("random").innerHTML=`${jokes[random]}`
  
}