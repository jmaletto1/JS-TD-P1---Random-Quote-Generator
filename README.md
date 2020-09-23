The project I have attached is a Random Quote Generator, built by myself on the 22nd of September, 2020.

The first area of the project creates the initial quotes array. This sets the 5 quotes with fields containing the quote, author, year of creation (if known), citation (if known), and category.

I then set the constant for the length of the "quotes" array, and the variables that will be used in the getRandomQuote() function.

Following that, we have the getRandomQuote() function. This function will select a numerical value at random, which cannot be higher than the amount of objects in the "quotes" array.
Then, the function sets the values to the variables created on line 45 (this avoids having to return the values).
Finally, the function uses if statements to determine if the "year" and "citation" variables have values. If they do, add them to the string literal, which is produced at the end of the function.

I then built a function to set the random background colour. This creates 3 random numbers, with a range of 0 - 256 (meaning 255).

Finally, the printQuote() function ties it all together. This calls the getRandomQuote() function, the setBackgroundColour() function, and displays the template literal containing the "quotes" data to index.html.

I also managed to use the setInterval() function to re-call the printQuote() function every 10 seconds.