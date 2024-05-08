document.addEventListener("DOMContentLoaded", function() {
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);

            const quote = data[randomIndex];

            const container = document.getElementById('quotes');
            container.innerHTML = `
                <blockquote>
                    <p>" ${quote.quote} "</p>
                    <footer>- ${quote.author}</footer>
                </blockquote>
            `;
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
