document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('quotes');
    const button = document.getElementById('getQuoteButton');

    function displayQuote(data) {
        // Generate a random index within the range of the quotes array length
        const randomIndex = Math.floor(Math.random() * data.length);

        // Get the quote at the random index
        const quote = data[randomIndex];

        // Display the quote
        container.innerHTML = `
            <blockquote>
                <p>" ${quote.quote} "</p>
                <footer>- ${quote.author}</footer>
            </blockquote>
        `;
    }

    // Function to fetch and display a new quote
    function fetchAndDisplayQuote() {
        // Fetch JSON data (example URL)
        fetch('quotes.json')
            .then(response => response.json())
            .then(data => {
                displayQuote(data);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }

    // Initial call to fetch and display a quote
    fetchAndDisplayQuote();

    // Event listener for the button click
    button.addEventListener('click', fetchAndDisplayQuote);
});
