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

renderHtml('/forms/login/login.html', 'login-form')