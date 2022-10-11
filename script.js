let quoteText = document.getElementById("quoteText")
let quoteAuthor = document.getElementById("quoteAuthor")
let quoteCategory = document.getElementById("quoteCategory")

const fetchQuote = async () => {
    quoteApi = "https://api.api-ninjas.com/v1/quotes";
    let res = await fetch(quoteApi, {
        headers : {
            'X-Api-Key': 'u8Ovvrd5EA9qqCr6A9n1lw==FWBv3gRrkFWJUt8I',
            'Accept': "application/json",
        }
    })
    const data = await res.json()
    const writeQuote = () => {
        quoteText.innerHTML = '"'+data[0].quote+'"';
        quoteAuthor.innerHTML = '~ '+data[0].author;
        quoteCategory.innerHTML = "Category - " + data[0].category;
    }
    writeQuote()
}

const nextQuoteBtn = () => location.reload();

fetchQuote()
