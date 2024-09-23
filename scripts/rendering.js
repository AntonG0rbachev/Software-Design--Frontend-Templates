import { swipeNext, swipePrevious } from "./swiping.js";

export function renderHtml(file, containerId) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new ReferenceError(
            `Could not render file: ${response.statusText}`
          )
      }
      return response.text()
    })
    .then(data => {
      document
        .querySelector(`#${containerId}`)
        .innerHTML = data;
    })
    .catch(error => {
      console.error(
        'Loading error: ', error
      )
    })
}

const moveRightButton = document.querySelector('button#swipe-right-button');
const moveLeftButton = document.querySelector('button#swipe-left-button');
const changingBlock = 'form-container';

renderHtml('/forms/login/login.html', changingBlock);

var list = new LinkedList();
list.addAll([
  '/forms/login/login.html',
  '/forms/signup/signup.html',
]);
list.setHeadAtStart();
console.log(list.toString())

moveRightButton.addEventListener('click', () => swipeNext(changingBlock));
moveLeftButton.addEventListener('click', () => swipePrevious(changingBlock));