// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div = document.createElement('div')
    const span1 = document.createElement('span')
    const h1 = document.createElement('h1')
    const span2 = document.createElement('span')

    div.classList.add('header')
    span1.classList.add('date')
    span2.classList.add('temp')

    span1.textContent = 'SMARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    span2.textContent = '98°'

    div.append(span1, h1, span2)
    return div
}

const header = document.querySelector('div.header-container')
header.appendChild(Header())
