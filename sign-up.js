			
const scriptURL = 'https://script.google.com/macros/s/AKfycbx7GU88Tp3r6GRDD74Gjc-8Hpao5c7xJn5e6SJ2e3zchjAnB7814OzJa90IQ6-_rL_P/exec'			
const form = document.forms['submit-to-google-sheet1']			
			

	
        
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Submission successfull! You will receive a confirmation email from indigolymadewebdevelopment@gmail.com"))
        .then(response=> form.reset())
        .catch(error => alert('Oops! Check your connection and try resending.'))
})
        