
const button = document.getElementById('jokeButton')
const jokeline = document.getElementById('joke')
const punchline = document.getElementById('punchline')
const displayB = document.getElementById('displayB')
const blogLink = document.getElementById('blogLink')
const stockData = document.getElementById('stockData')
const stockButton = document.getElementById('stockButton')

stockButton.addEventListener('click', getStock)
button.addEventListener('click', getJoke);
displayB.addEventListener('load', getBlog('https://www.googleapis.com/blogger/v3/blogs/1496952381965430188/posts?key=AIzaSyBcVfx4HbzGxZQGhszgyJ-vCk17InMuOT4'))

async function getJoke () {
const joke = await fetch('https://official-joke-api.appspot.com/random_joke')

const jokeObj = await joke.json()
jokeline.innerText = jokeObj.setup
punchline.innerText = jokeObj.punchline
console.log(jokeObj)
}

async function getBlog(url) {
    const dataBlog = await fetch(url)
    const dataBlogObj = await dataBlog.json()
    blogLink.setAttribute('href', dataBlogObj.items[0].url)
    displayB.innerHTML = dataBlogObj.items[0].content
}



function getStock() {
    stockData = fetch("https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
    .then(response => response.json())
    .then(data => console.log(data))
    console.log(stockData)

}