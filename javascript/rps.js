// usr_input = prompt('R P or S?: ');
// user_input = String(usr_input);

// console.log(user_input);


// raw_computer_inputer = ['r', 'p', 's'];

// computer_input = raw_computer_inputer[Math.floor(Math.random() * raw_computer_inputer.length)];

// console.log(computer_input)

// computer_input = String(computer_input)

// function rps(computer_input, user_input) {
//     if (computer_input === user_input) {
//         console.log(`It's a draw`);
//     }
//     else if(computer_input === 'r' && user_input === 'p') {
//         console.log(`You win!`);
//     }
//     else if (computer_input === 'p' && user_input === 's') {
//         console.log('You win!');
//     }
//     else if (computer_input == 's' && user_input === 'r') {
//         console.log('You win!');
//     }

//     else {
//         console.log('You lose :(');
//     }
// }


// rps(computer_input, user_input)

/*
I want tp get make a span and there get the cordinates of X and Y 
*/

const button = document.querySelectorAll('.btn')

console.log(button);


 button.forEach(btn => {
    btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        const span = document.createElement('span');
        span.classList.add('ripple')

        span.style.top = `${y}px`;
        span.style.left = `${x}px`;

        this.appendChild(span);

        setTimeout(() => this.removeChild(span), 450)
    })
})

