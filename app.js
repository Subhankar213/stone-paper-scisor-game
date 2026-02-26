let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const massage=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#comp-score");
const computerchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const draw=()=>{
   // console.log("game was draw");
     massage.innerText="game was draw.play again";
       massage.style.backgroundColor="#081b31";
     
};

const showwinner=(userwin,userchoice,computer)=>{
 if(userwin){
   // console.log("you win !");
    massage.innerText=`You win ! your ${userchoice} beats ${computer}`;
    massage.style.backgroundColor="green";
    userscore++;
    userscorepara.innerText=userscore;
 }
 else{
    //console.log("you lose");
     massage.innerText=`You lose.  ${computer} beats your ${userchoice}`;
       massage.style.backgroundColor="red";
         computerscore++;
    computerscorepara.innerText=computerscore;
 }
}
 const play=(userchoice)=>{
 
  //computr choice
  const computer=computerchoice();
  

  if(userchoice==computer){
draw();
  }
  else{
    let userwin=true;
    if(userchoice=="rock"){
      let userwin= computer=="papaer"? false : true; 
    }
    else if(userchoice=="paper"){
        let userwin=computer=="scissors" ? false: true;
    }
    else{
        userwin=computer=="rock"? false:true;
    }
    showwinner(userwin,userchoice,computer);
  }

 };
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
   
    const userchoice=choice.getAttribute("id");

    play(userchoice);
    });
});