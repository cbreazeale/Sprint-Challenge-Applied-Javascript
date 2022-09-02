// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


const url2 = 'https://lambda-times-backend.herokuapp.com/articles'
axios(url2)
.then(res => {
    const articlesObj = res.data.articles;
    // console.log(articlesObj)
    for (const article in articlesObj){
        // console.log(articlesObj[article])
        const articleContent = articlesObj[article]

        document.querySelector('.cards-container').appendChild(cardCreator(articleContent))
    }
console.log(document.querySelector('.cards-container'))
})


function cardCreator(data){

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    div1.classList.add('card')
    div2.classList.add('headline')
    div3.classList.add('author')
    div4.classList.add('img-container')

    // div2.textContent =

    data.forEach(element => {
        const vals = Object.values(element)
        // console.log(Object.keys(element))
        div2.textContent = vals[0]
        img.src = vals[1]
        span.textContent = 'By ' + vals[2]
    });

    div1.append(div2,div3)
    div3.append(div4,span)
    div4.appendChild(img)

    console.log(div1)
    return div1
}
