/*

Creating a page where every time the user hits the "Roll Dice" button,
the screen randomly updates the two dice. Use the html and css code included in the starter code folder
to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

random1 = Math.ceil(Math.random()*6)
random2 = Math.ceil(Math.random()*6)

function rooler(){

    var span = document.getElementById("first-die");
    if (random1 == 1)  span.setAttribute('class', 'dice-1');
    else if (random1 == 2) span.setAttribute('class', 'dice-2');
    else if (random1 == 3) span.setAttribute('class', 'dice-3');
    else if (random1 == 4) span.setAttribute('class', 'dice-4');
    else if (random1 == 5) span.setAttribute('class', 'dice-5');
    else  span.setAttribute('class', 'dice-6');


    var span = document.getElementById("second-die");
    if (random2 == 1)  span.setAttribute('class', 'dice-1');
    else if (random2 == 2) span.setAttribute('class', 'dice-2');
    else if (random2 == 3) span.setAttribute('class', 'dice-3');
    else if (random2 == 4) span.setAttribute('class', 'dice-4');
    else if (random2 == 5) span.setAttribute('class', 'dice-5');
    else  span.setAttribute('class', 'dice-6');

}

