const getNewQuote = async () => {
    try {
        // API for random quote
        const api = "https://type.fit/api/quotes";

        // Fetch the API
        const response = await fetch(api);

        // Check if the response status is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Get a random number within the range of available quotes
        const randomNum = Math.floor(Math.random() * data.length);

        // Extract the quote and author from the data
        const quote = data[randomNum].text;
        const author = data[randomNum].author || "Unknown";

        // Update the HTML elements
        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = `- ${author}`;

        // Tweet the quote
        const tweet = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        document.getElementById("tweet-quote").setAttribute("href", tweet);
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

// Call the function
getNewQuote();