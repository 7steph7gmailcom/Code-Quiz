# Code-Quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

    event button
    time function
    init quiz

WHEN I answer a question
THEN I am presented with another question

    must get questions to carousel after user response

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

    decrement function to time clock after incorrect answer

WHEN all questions are answered or the timer reaches 0
THEN the game is over

    prompt function for user to know game over

WHEN the game is over
THEN I can save my initials and my score

    must keep local storage of quiz score
