/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgs = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]


const makeCarousel = (photos) => {
  const carousel = document.createElement('div')
  const left = document.createElement('div')
  const right = document.createElement('div')
  carousel.append(left)
  carousel.append(right)
  
  carousel.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')

  const img = document.createElement('img')
  
  photos.forEach(() => {
    carousel.append(img)
  })
  
  let current = 0
  img.src = imgs[current]
  img.style.display ='block'
  
  left.addEventListener('click', () => {
    current -= 1
    if (current < 0) {
      current = imgs.length - 1
      console.log('it worked!L')
    }
    img.style.display = 'block'
    img.src = imgs[current]
  })

  right.addEventListener('click', () => {
    current += 1
    console.log(current)
    if (current > imgs.length - 1) {
      current = 0
      console.log('it worked!R')
    }
    img.style.display = 'block'
    img.src = imgs[current]
  })
  
  // const img1 = document.createElement('img')
  // const img2 = document.createElement('img')
  // const img3 = document.createElement('img')
  // const img4 = document.createElement('img')
  
  // img1.src = "./assets/carousel/mountains.jpeg"
  // img2.src = "./assets/carousel/computer.jpeg"
  // img3.src = "./assets/carousel/trees.jpeg"
  // img4.src = "./assets/carousel/turntable.jpeg"
  
  // carousel.appendChild(img1)
  // carousel.appendChild(img2)
  // carousel.appendChild(img3)
  // carousel.appendChild(img4)
  
  // imgs.forEach(img => {
  //   img.classList.remove('img')
  // })
  
  // img1.classList.remove('carousel img')

  // left.addEventListener('click', () => {
    //   for (const i = 0; i < imgs.length; i--) {
  //     imgs[i--].classList.toggle('img')
  //   }
  // })
  
  // right.addEventListener('click', () => {
    //   for (const i = 0; i < imgs.length; i++) {
      //     img[i++].classList.toggle('img')
      //   }
      //   // img1.classList.toggle('carousel img')
      // })
      
      
      
      console.log('Carousel: ', carousel)
      
      return carousel
    }

    const carouselContainer = document.querySelector('.carousel-container')
    carouselContainer.appendChild(makeCarousel(imgs))