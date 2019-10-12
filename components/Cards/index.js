// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data.articles)
    // console.log(cardCreator(response.data.articles.javascript))
    // console.log(cardCreator(response.data.articles.bootstrap))
    // console.log(cardCreator(response.data.articles.technology))
    // console.log(cardCreator(response.data.articles.jquery))
    // console.log(cardCreator(response.data.articles.node))
    response.data.articles.javascript.forEach(element => {
        cardCreator(element)
    });
    response.data.articles.bootstrap.forEach(element => {
        cardCreator(element)
    });
    response.data.articles.technology.forEach(element => {
        cardCreator(element)
    });
    response.data.articles.jquery.forEach(element => {
        cardCreator(element)
    });
    response.data.articles.node.forEach(element => {
        cardCreator(element)
    });
  })
  .catch(error => {
    console.error(error)
  })

function cardCreator(info) {
    const card  = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgBox = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgBox.classList.add('img-container')

    headline.textContent = info.headline
    img.setAttribute('src', info.authorPhoto)
    span.textContent = `By ${info.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgBox)
    imgBox.appendChild(img)
    author.appendChild(span)

    const cardBox = document.querySelector('.cards-container')
    cardBox.appendChild(card)

    return card
}
