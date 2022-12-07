
const rock = document.getElementById("btn-rock");

const paper = document.getElementById("btn-paper");

const scissors = document.getElementById("btn-scissors");

function events(r = rock, p = paper, s = scissors) {
  r.addEventListener("click", (e) => {
    usr_input = "r";
    play(usr_input);
  });
  p.addEventListener("click", (e) => {
    usr_input = "p";
    play(usr_input);
  });
  s.addEventListener("click", (e) => {
    usr_input = "s";
    play(usr_input);
  });
}

function play(usr_input) {
  const result = document.getElementById("mid-text-font");

  let raw_computer_inputer = ["r", "p", "s"];

  let computer_input =
    raw_computer_inputer[
      Math.floor(Math.random() * raw_computer_inputer.length)
    ];

  computer_input = String(computer_input);

  if (computer_input === usr_input) {
    result.textContent = `It's a draw ${draw}`;
  } else if (computer_input === "r" && usr_input === "p") {
    result.textContent = `You win!`;
  } else if (computer_input === "p" && usr_input === "s") {
    result.textContent = "You win!";
  } else if (computer_input == "s" && usr_input === "r") {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose :(";
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
