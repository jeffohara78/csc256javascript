// create function for user to interact w/a magic 8 ball
$(document).ready(function(){
  
    // create variables
    var magic8Ball = {};
    // setup the list of answers for the user in an array
    magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
   
    // create function to get the answer from the user
    magic8Ball.getAnswer = function(question)
    {
      // variables needed for calculating answer
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      // setup user interaction after typing in their question
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "answerside.png");
  
      // retain the question and the answer for the user
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    // setup new function for displaying the answer to the user after entering in their question
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "magic8ballQuestion (1).png");
      var question = prompt("What do you want to know?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });