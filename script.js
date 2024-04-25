let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");//step 1

const msg=document.querySelector("#msg");  //step 9
 
const userScorePara=document.querySelector("#user-score");//step7
const compScorePara=document.querySelector("#comp-score"); //step 8


const getCompChoice = () =>{  //step 4
    const options= ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}

const drawGame =()=>{  //step 5
    //console.log("game was draw");
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="blue";
}


const showWinner=(userWin,userChoice,compChoice)=>{  //step 6
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;  //access userScore from step 7
        //console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;  // 
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;  //access compScore from step 8   
       // console.log("you lose");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;   ////access msg from step 9
        msg.style.backgroundColor="Red";
    }
}


const playGame = (userChoice) => {   //step 3
 console.log("user choice =", userChoice);
 //Generate computer choice---
 const compChoice=getCompChoice();  // call to step 4
 console.log("comp choice=",compChoice);
 if(userChoice===compChoice){
    //Draw game
    drawGame();  // call to step 5
 }else{
    let userWin=true;
    if(userChoice==="rock" ){
        //scissors,paper
        userWin=compChoice==="paper" ? false:true;
    } else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors" ?false:true;
      }else{
        //rock,paper
        userWin=compChoice==="rock" ? false:true;
      }
      showWinner(userWin,userChoice,compChoice);  //call to step 6

    }
 };



 choices.forEach((choice) => {    //step2
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice); // call to step 3
    });
 });


 

