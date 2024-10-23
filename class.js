const scriptURL = 'https://script.google.com/macros/s/AKfycbx3u6kdUV7XqcigEYiZ-FLn1lQUkV33tTffgcUkHILL_53P3X5KD2tW-u3biW2z_OY8nw/exec'			
const form = document.forms['submit-to-google-sheet2']			


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Please check your email. If the provided course code is registered, you will receive an email containing the class link shortly"))
    .then(response=> form.reset())
    .catch(error => alert('Oops! Check your connection and try resending.'))
})


