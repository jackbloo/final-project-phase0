alert('Please Guess from 1-10, you have 10 chances')
var guessNumber = 7
var guess = prompt('Insert Guess')
for (i = 1; i <= 10; i++) {
    if (guessNumber == guess) {
        alert('Congratulations, you are correct!')
        break;
    } else {
        guess = prompt('Dont give up! Try again!')
    }
}