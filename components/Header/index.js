// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())

function Header() {
    const headerBox = document.createElement('div')
    const dateSpan = document.createElement('span')
    const title = document.createElement('h1')
    const tempSpan = document.createElement('span')
    
    headerBox.appendChild(dateSpan)
    headerBox.appendChild(title)
    headerBox.appendChild(tempSpan)

    headerBox.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    dateSpan.textContent = 'SMARCH 28, 2019'
    title.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    console.log(headerBox)
    
    
    return headerBox
}
