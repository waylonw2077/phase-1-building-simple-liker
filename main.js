// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal')
const errorMessage = document.querySelector('#modal-message')

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const success = Math.random() < 0.5
      if (success) {
        resolve('Pretend remote server notified of action!')
      } else {
        reject('Something went wrong')
      }
    }, 300)
  })
}

function toggleHeart(event) {
  const heart = event.target
  if (heart.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      })
      .catch((error) => {
        errorMessage.innerText = error
        errorModal.classList.remove('hidden')
        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 3000)
      })
  } else if (heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => heart.addEventListener('click', toggleHeart))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
