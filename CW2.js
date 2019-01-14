//Create an array with 5 numbers.
//Ask the user for the length of the array you want to print.
//Alert the user of the array from 0 to their input.

var numberArray = [1,2,3,4,5];

var input = parseInt(prompt("Enter length of array"));

for (i=0; i<numberArray[input]; i++)
{
    alert(numberArray[i])
}