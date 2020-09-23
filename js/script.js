//JS Random Quote Generator Script

//Set the 5 quotes with fields containing the quote, author, year of creation (if known), citation (if known), and category.

let quotes = [
	{
		quote: "When the student is ready, the teacher will appear.",
		source: "Buddha Siddhartha Guatama Shakyamuni",
		year: "Approx 500 BC",
		citation: "Unknown",
		category: "Buddhism"
	},
	{
		quote: "Creativity is intelligence having fun.",
		source: "Albert Einstein",
		year: "Unknown",
		citation: "https://www.lifehack.org/articles/communication/30-the-most-inspirational-quotes-all-time.html",
		category: "Science"
	},
	{
		quote: "I can accept failure, everyone fails at something. But I can't accept not trying. To be successful you have to be selfish, or else you never achieve.",
		source: "Michael Jordan",
		year: "Unknown",
		citation: "https://www.brainyquote.com/quotes/michael_jordan_385092",
		category: "Sports"
	},
	{
		quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
		source: "Old Chinese Proverb",
		year: "Unknown",
		citation: "https://www.psychologytoday.com/gb/blog/joy-and-pain/201504/the-best-time-plant-tree-was-20-years-ago-no-matter",
		category: "Motivation"
	},
	{
		quote: "I want to put a ding in the universe",
		source: "Steve Jobs",
		year: "2011",
		citation: "https://www.hobo-web.co.uk/the-best-steve-jobs-quotes-putting-a-ding-in-the-universe/",
		category: "Business"
	}
]


//Create the getRandomQuote() function. This will select a numerical value at random, which cannot be higher than the amount of objects in the "quotes" array.
//Using this random number, the function will then return a random "quotes" object.


function getRandomQuote() {
	randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	return randomQuote;
}

// Set Random Background Colour

function setBackgroundColour() {
	let r1 = Math.floor(Math.random()*256);
	let r2 = Math.floor(Math.random()*256);
	let r3 = Math.floor(Math.random()*256);
	let bgColour = `rgb(${r1}, ${r2}, ${r3})`;
	document.body.style.background = bgColour;
}

setBackgroundColour();

// Set the printQuote function, which calls getRandomQuote(), setBackgroundColour(), 
// The function sets the variables for year, citation, quote, by, and category, to create the template literal, which then prints the quote and it's contents to index.html.

function printQuote() {
	getRandomQuote();
	let year, citation;
	let quote = randomQuote.quote;
	let source = randomQuote.source;
	if (randomQuote.year === "Unknown") {
	year = "" }
	else { year = `<span class="year">${randomQuote.year}</span> `}
	if (randomQuote.citation === "Unknown") {
	citation = "" }
	else { citation = `<span class="citation"><a href="${randomQuote.citation}" target="_blank">Citation Link</a></span> `}
	let category = randomQuote.category;
	let printQ = `<p class="quote">${quote}</p>
        	<p class="source">${source}
			${citation}
			${year}</p>
			<h5>Tags:<i><u><b> ${category}</b></i></u></h6>

`;
	setBackgroundColour();
document.getElementById('quote-box').innerHTML = printQ;
}
printQuote();

// Set the auto-refresh interval at 10 seconds.

setInterval(() => {
  printQuote(); 
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
