var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;
// if we click on the start/reset
document.getElementById("startreset").onclick =
function(){

    // if we are playing
  
    if(playing == true){
 
        location.reload();  // reload page
 
    }else{    //if we are not playing 

        // change mode to playing
     
        playing = true;
     
        //set score to 0
     
        score = 0; 
document.getElementById("scorevalue").innerHTML
    = score;
        
    // show countdown box
 
    show("timeremaining");
timeremaining = 60;
document.getElementById("timeremainingvalue").innerHTML
= timeremaining;

// hide game over

hide("gameover");

//change button to reset 
document.getElementById("startreset").innerHTML
= "Reset Game";  
   
// start countdown
startcountdown();

// generate a new ques and answer 
 generateQA();
   }
}

// clicking on an answer box

for(i=1; i<5 ;i++){
    document.getElementById("box"+i).onclick = function(){
    // if we click on  answer box
   if(playing == true){
    if(this.innerHTML == correctanswer){
        // correct answer
   
    score++;
 document.getElementById("scorevalue").innerHTML= score;
  
 //  show correct box
    hide("wrong");
    show("correct");
    setTimeout(function(){ 
        hide("correct")
    }, 1000)   
    // generate new ques
    generateQA();
    }else{
        // wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong")
        }, 1000)
    }
   }
}
}
//if we are playing?
// correct?
// increase score
//show correct box for 1sec
//generate new Q&A
//no
//show try  again box for 1 sec

// functions
// start counter 
function startcountdown(){
action = setInterval(function(){
timeremaining -= 1;
document.getElementById("timeremainingvalue").innerHTML
= timeremaining;
if(timeremaining == 0){
    stopcountdown()
    show("gameover");
    document.getElementById("gameover").innerHTML=
    "<p>Game Over!</p><p> Your score is " + score +"</p>"
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    playing = false ; 
 document.getElementById("startreset"),innerHTML =
 "Start Game";    
}
},1000)
} 

// stopcounter
function stopcountdown(){
    clearInterval(action);
}
// hide element
function hide(id){
    document.getElementById(id).style.display = "none";
}

// show element 
function show(id){
    document.getElementById(id).style.display = "block";
}
// generate QA and multiple answers
function generateQA(){
    var x =  1+Math.round(9*Math.random());
    var y =  1+Math.round(9*Math.random());
   correctanswer = x*y;
   document.getElementById("question").innerHTML=
   x + "x" + y;
   var correctposition = 1+Math.round(3*Math.random());
   document.getElementById("box"+correctposition).innerHTML=
   correctanswer; 
//    filled one box with correct answer
// fil other boxes with wrong answer
 var answers = [correctanswer];
for(i=1; i<5; i++){
    if(i != correctposition){
        var wronganswer;
        do{
            wronganswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
         }while(answers.indexOf(wronganswer)>-1)
    document.getElementById("box"+i).innerHTML = wronganswer;
   answers.push(wronganswer);    
}
}
}
