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

const moveRightButton = document.querySelector('#swipe-right-button');
const moveLeftButton = document.querySelector('#swipe-left-button');
const changingBlock = 'form-container';

renderHtml('/forms/login/login.html', changingBlock);

moveRightButton.addEventListener('click', swipeNext());
moveLeftButton.addEventListener('click', swipePrevious());