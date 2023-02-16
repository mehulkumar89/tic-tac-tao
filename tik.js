const len=document.querySelectorAll(".box").length;
const e=document.querySelectorAll(".box");
let flag=1;
let turn="X";
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let slid=document.getElementById("img");
document.getElementById("win").innerHTML= "TURN FOR:- "+turn;
let audio=new Audio("ting.mp3");
let audio_1=new Audio("crash.mp3");
for(var i=0;i<len;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",function(){
        if(this.innerHTML==="" && flag){
         this.innerHTML=turn;
         chg();
         document.getElementById("win").innerHTML="TURN FOR:- "+turn;
         audio.play();
         win();
        }
    });
}
function win(){
arr.forEach(function(ele){
    if(e[ele[0]].innerHTML==="X"&&e[ele[1]].innerHTML==="X"&&e[ele[2]].innerHTML==="X"){
      document.getElementById("win").innerHTML="--X WON--";
      flag=0;
      game_ov();
      slid.src="excited.gif";
      slid.style.width="100px";
      slid.style.height="100px";
    }
    else if(e[ele[0]].innerHTML==="0"&&e[ele[1]].innerHTML==="0"&&e[ele[2]].innerHTML==="0"){
      document.getElementById("win").innerHTML="--0 WON--";
      flag=0;
      game_ov();
      slid.src="excited.gif";
      slid.style.width="100px";
      slid.style.height="100px";
    }
})
}
function chg(){
    if(turn==="X"){
    turn="0";
    }
    else{
        turn="X";
    }
}
function game_ov(){
    setTimeout(function(){
       audio_1.play();       
    },1000);
}
function butn(){
    turn="X";
    flag=1;
    slid.style.width="0px";
    slid.style.height="0px";
    let clr=document.querySelectorAll(".box");
    document.getElementById("win").innerHTML="TURN FOR:- "+turn;
    clr.forEach(function(ele){
        ele.innerHTML="";
    });
}