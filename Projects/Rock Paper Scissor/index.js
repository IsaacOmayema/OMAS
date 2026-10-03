const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
rock.addEventListener('click' , ()=>{
    const computerChoice = Math.floor((Math.random() * 3) + 1)
    //Displaying Computer Choice 
    if(computerChoice == 1){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Rock";
        const result = document.querySelector('.result');
        result.innerHTML = 'Draw'
    }
    else if(computerChoice == 2){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Paper";
        const result = document.querySelector('.result');
        result.innerHTML = 'Lose'

    }
    else{
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Scissor";
        const result = document.querySelector('.result');
        result.innerHTML = 'Win'

    }
    const yourchoice = document.querySelector('.choice');
    yourchoice.innerHTML = "Rock"
});
paper.addEventListener('click' , ()=>{
    const computerChoice = Math.floor((Math.random() * 3) + 1)
        //Displaying Computer Choice 
    if(computerChoice == 1){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Rock";
        const result = document.querySelector('.result');
        result.innerHTML = 'Win'
    }
    else if(computerChoice == 2){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Paper";
        const result = document.querySelector('.result');
        result.innerHTML = 'Draw'
    }
    else{
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Scissor";
        const result = document.querySelector('.result');
        result.innerHTML = 'Lose'
    }
    const yourchoice = document.querySelector('.choice');
    yourchoice.innerHTML = "Paper"
});
scissor.addEventListener('click' , ()=>{
    const computerChoice = Math.floor((Math.random() * 3) + 1)
    
        //Displaying Computer Choice 
    if(computerChoice == 1){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Rock";
        const result = document.querySelector('.result');
        result.innerHTML = 'Lose'
    }
    else if(computerChoice == 2){
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Paper";
        const result = document.querySelector('.result');
        result.innerHTML = 'Win'
    }
    else{
        const Computerchoice = document.querySelector('.computerchoice');
        Computerchoice.innerHTML = "Scissor";
        const result = document.querySelector('.result');
        result.innerHTML = 'Draw'
    }
    const yourchoice = document.querySelector('.choice');
    yourchoice.innerHTML = "Scissor"
});

