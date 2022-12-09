
const rock = document.getElementById("btn-rock");

const paper = document.getElementById("btn-paper");

const scissors = document.getElementById("btn-scissors");

function events(r = rock, p = paper, s = scissors) {
  r.addEventListener("click", (e) => {
    usr_input = "rock";
    play(usr_input);
  });
  p.addEventListener("click", (e) => {
    usr_input = "paper";
    play(usr_input);
  });
  s.addEventListener("click", (e) => {
    usr_input = "scissors";
    play(usr_input);
  });
}

for(let i = 0; i<5; i++){
function play(usr_input) {
  const result = document.getElementById("mid-text-font");

  let raw_computer_inputer = ["rock", "paper", "scissors"];

  let length = raw_computer_inputer.length;

  let computer_input =
    raw_computer_inputer[
      Math.floor(Math.random() * length)
    ];

  computer_input = String(computer_input);
  
  if (computer_input === usr_input) {
    result.textContent = `You both chose the same thing, it's a draw!`;
  } else if (computer_input === "rock" && usr_input === "paper") {
    result.textContent = `You chose ${usr_input}, you win!`;
    i += 1
  } else if (computer_input === "paper" && usr_input === "scissors") {
    result.textContent = `You chose ${usr_input}, you win!`;
  } else if (computer_input == "scissors" && usr_input === "rock") {
    result.textContent = `You chose ${usr_input}, you win!`;
  } else {
    result.textContent = `The computer choose ${computer_input}, you lose :(`;
  }
}
}


const button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    const span = document.createElement("span");
    span.classList.add("ripple");

    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 450);
  });
});

button.forEach((bttnn) => {
  bttnn.addEventListener("click", (e) => {
    events();
  });
});
