let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const gencompchoice=()=>{
    const options =["rock","paper","scissors"];
    const ranidx = Math.floor(Math.random()*3);
    return options[ranidx];
};

const drawgame=()=>{
    msg.innerText = "Game Was Draw ! play again"
    msg.style.backgroundColor ="#6d6875";
};

const showwinner= (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose! ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor="red";
    }
};
 
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        playgame(userchoice);
    });
});

