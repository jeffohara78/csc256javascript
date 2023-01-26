// Function to build the puzzle made up of 3 words
function loadCrosswordPuzzle(){
    // main table on html page
    var table = document.getElementById("Crossword Puzzle");
    // an array that holds the words for the puzzle
    var arrWords = new Array("JavaScript", "Cascade", "html");
    // this is the 2nd row of the table
    var tr = table.rows[1];
    // for loop to print out the first word in the puzzle
    for(var i=0; i<arrWords[0].length; i++){
        // this is the cell that will have a letter added to it
        var cell = tr.cells[i];
        // innerText allows you to change the text of the cell
        cell.innerText = arrWords[0][i];
    }
    // for loop to print out the 2nd word
    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        // this is the cell that will have a letter added to it
        var cell = trow.cells[1];
        // innerText allows you to change the text of the cell
        cell.innerText = arrWords[1][i];
    }
    // for loop to print out the 3rd word
    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i];
        // this is the cell that will have a letter added to it
        var cell = trow.cells[9];
        // innerText allows you to change the text of the cell
        cell.innerText = arrWords[2][i];
    }

}