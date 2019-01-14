//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.


var fruitArray = ["apple","banana","grape"];

do
{
    var add = prompt("Enter a fruit to add to the array");
    fruitArray.push(add);

    for (var i=0;i<fruitArray.length; i++)
{
    console.log(fruitArray[i])
}
}
while (add !== "q");



