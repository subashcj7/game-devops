//challenge 1:your age in days
function ageInDays(){
    var birthyear= prompt('what year were you born...good friend!!');
    var ageInDays=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode("You are "+ ageInDays + ' days old');
    h1.setAttribute("id", 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}



//challenge 2:rock,paper,scissors

function rpsGame(YourChoice){
    console.log(YourChoice)
    
    var HumanChoice, BotChoice;
    HumanChoice=YourChoice.id;
    
    BotChoice=numberToChoice(randToRpsInt());
    console.log('Bot choice:',BotChoice);
   
    results= decideWinner(HumanChoice, BotChoice); //[0,1] HUMAN LOST TO BOT
    console.log(results)
   
    message=finalMessage(results); // {'message':you won','color':'green'}
    console.log(message)
    rpsfrontend(YourChoice.id,BotChoice,message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(YourChoice,BotChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1 ,'rock':0.5 ,'paper':0},
        'paper': {'rock':1 ,'paper':0.5 ,'scissors':0},
        'scissors': {'paper':1 ,'scissors':0.5 ,'rock':0},

    }
    var Yourscore=rpsDatabase[YourChoice][BotChoice];
    var BotScore=rpsDatabase[BotChoice][YourChoice];

    return [Yourscore,BotScore];
}



function finalMessage([Yourscore,BotScore]){
    if (Yourscore == 0){
        return {'message': 'Uhhh,You lost!!','color' : 'red'};
    }
    else if (Yourscore == 0.5){
        return {'message': 'Haha,You tied','color' : 'blue'};
    }else{
        return {'message': 'Hurray!,You won','color' : 'green'};
    }
}

function rpsfrontend(HumanImageChoice,BotImageChoice,finalMessage){
    var imagesDatabase= {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('rock').src

    }
    //remove all the  images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var HumanDiv = document.createElement('div');
    var BotDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    HumanDiv.innerHTML ="<img src='" + imagesDatabase[HumanImageChoice]+  "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size; 60px;  padding: 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(HumanDiv);
    
    BotDiv.innerHTML ="<img src='" + imagesDatabase[HumanImageChoice]+  "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    
    document.getElementById('flex-box-rps-div').appendChild(BotDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);




}
