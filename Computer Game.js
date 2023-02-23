// Create a function that gathers info from the user in the form on the page
function processForm(){
    // Clear the form 
    document.getElementById("userInfo").style.display = "";
    // Display first name in the userInfo div
    document.getElementById("uname").innerText = document.getElementById("username").value;
    // Display weapon choice entered by user
    document.getElementById("theweapons").innerText = document.getElementById("weapons").value;
    // Display land entered by the user
    document.getElementById("thelandname").innerText = document.getElementById("landname").value;
    // Display choice made by user
    document.getElementById("thehero").innerText = document.getElementById("hero").value;

}