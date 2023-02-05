// load links
window.onload = initLinks;

// create variables
var thePic = 0;
// create an array to hold the images for the webpage
var arrMyPix = new Array("lance-anderson-NrDYqseeAxk-unsplash.jpg", "osman-rana-xhpMNieqBwA-unsplash.jpg", "sydney-angove-8Duzi4xFNns-unsplash.jpg", "todd-kent-iRKv_XiN--M-unsplash.jpg");

// create a function to navigate
function initLinks(){
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

// function to navigate forward
function processPrevious(){
    if (thePic == 0){
        thePic = arrMyPix.length;
    }
    thePic--;
    document.getElementById("myPicture").src = arrMyPix[thePic];
    return false;
}

// function to navigate back
function processNext(){
    thePic++;
    if (thePic == arrMyPix.length){
        thePic = 0;
    }
    document.getElementById("myPicture").src = arrMyPix[thePic];
    return false;
}