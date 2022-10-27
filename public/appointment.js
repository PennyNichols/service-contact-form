let appointmentForm = document.querySelector('#appointment');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let address = document.querySelector('#address');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let service = document.querySelector('#service');
let message = document.querySelector('#message');

appointmentForm.addEventListener('submit', sendEmail);

function sendEmail() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email: 'joshua@schmidtshomeservices.com',
    html:
      'First Name: ' +
      document.getElementById('first-name').value +
      '<br> Last Name: ' +
      document.getElementById('last-name').value +
      '<br> Phone Number: ' +
      document.getElementById('phone').value +
      '<br> Email Address: ' +
      document.getElementById('email').value +
      '<br> Property Address: ' +
      document.getElementById('address').value +
      '<br> Date: ' +
      document.getElementById('date').value +
      '<br> Time: ' +
      document.getElementById('time').value +
      '<br> Service: ' +
      document.getElementById('service').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://barry-dev-mail-app.herokuapp.com/mail', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      alert('Appointment Request Successful');
    })
    .catch((error) => console.log('error', error));
};
  