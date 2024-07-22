import CatchGoblin from "./catch-goblin"
document.addEventListener("DOMContentLoaded", ()=>{
  let container = document.querySelector(".container");
  let lost = 0;
  container.addEventListener("click", (e)=>{
    if(e.target.closest(".hole").firstElementChild){
      console.log("goblin found");
      lost = 0;
    }
  })
  for(let i = 0; i < 16; i++){
    let hole = document.createElement("div");
    hole.classList.add("hole");
    container.appendChild(hole);
  }
  let game = new CatchGoblin(container);
  game.addGoblin(Math.floor(Math.random() * 16));
  let interval = setInterval(()=>{
    if(lost === 5){
      clearInterval(interval);
      alert("You lose");
    }
    else{
      game.moveGoblin();
      ++lost;
    }
    
  }, 1000)
})
