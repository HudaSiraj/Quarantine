const game = ()=>{
    let pScore = 0;
    let cScore = 0;


    //start the game
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });


    };

    //Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')
     

        hands.forEach(hand=>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });

        });
        //Computer options
                const computerOptions = ["rock", "paper", "scissors"]

        options.forEach(options=>{
            options.addEventListener('click', function(){
               //computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(()=>{
                    //Here is where we call compareHands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`

                }, 2000);
                //Animation 
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    };

    const updateScore = ()=>{
        const playerScore =  document.querySelector('.player-score p');
        const computerScore =  document.querySelector('.computer-score p');
        playerScore.textContent= pScore;
        computerScore.textContent= cScore;
    }




    const compareHands = (playerChoice, computerChoice)=>{
      //update text 
        const winner = document.querySelector('.winner');
        //checking for a tie
        if (playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
           
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You score a point!'
                pScore ++;
                updateScore();
                return;
            } else{
                winner.textContent= 'You lost, computer scores.';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'You score a point!'
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent= 'You lost, computer scores.';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'You score a point!'
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent= 'You lost, computer scores.';
                cScore++;
                updateScore();
                return;
            }
        }
        

    }

    //  call all the inner function
    startGame();
    playMatch();
};

//start game function
game();