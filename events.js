// Add function to randomize images on the screen 
function swapImage(){
    //Create an array for all images 
    var arrImages = ["Acorn Street Smaller.jpg", "Boston Library Smaller.jpg", "Citgo Smaller.jpg", "Greenline Smaller.jpg", "Harbor Smaller.jpg", "Prudential Smaller.jpg"];
    //Source image 1 
    var theImg = document.getElementById("img1");
    // Use the random math generator to sort images randomly
    var randomNumber = Math.floor(Math.random() * arrImages.length);
    theImg.src = arrImages[randomNumber];

    
}
// Add function to replace initial image
function swapImage2(){
    var theImg= document.getElementById("img1");
    theImg.src = "Citgo Smaller.jpg";

}
// Add an alert function for the user
function dontClick(){
    alert ("You weren't supposed to click this! Stay on the tour!");
}
// Add a function to change cursor style into a wait symbol
function changeCursor(){
    document.getElementById("btnNoClick").style.cursor = "wait";
}

/*
function validateName(){
    var theName = document.getElementById("txtName").value;
    if (theName == ""){
        alert ("Please enter your name.");
        document.getElementById("txtName").focus();
    }
}
*/

