function submitFeedback() {
    const username = document.getElementById('name').value;
    const feedback = document.getElementById('userExperience').value;
    alert('Thank you for your valuable review');
    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userExperience').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });

