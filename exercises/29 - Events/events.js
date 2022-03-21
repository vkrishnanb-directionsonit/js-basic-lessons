/* eslint-disable semi */
const btn1 = document.querySelector('.btn1');
const coolButton = document.querySelector('.btn2');

function handleClick () {
  console.log('🐛 IT GOT CLICKED!!!');
}
btn1.addEventListener('click', handleClick);

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

btn1.removeEventListener('click', handleClick);

// btn1.addEventListener('click', function () {
//   console.log('Im an anon!');
// });

// // Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target; // reference to the DOM element
  console.log(button.textContent);
  console.log('Price: ' + parseFloat(event.target.dataset.price));
  // console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  console.log(event.bubbles);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyBtn) {
  buyBtn.addEventListener('click', handleBuyButtonClick);
});
// Event bubbling from Window to the buttons
window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(event.bubbles);
  console.log(this);
});
