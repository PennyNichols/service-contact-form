$(document).ready(function(){
    $(".toggler").click(function(){
        $(".nav-links").toggleClass("collapse");
        $(".toggler i").toggleClass("hidden");
    });
    $(".nav-links a").click(function(){
        $(".nav-links").toggleClass("collapse");
        $(".toggler i").toggleClass("hidden");
    });
});

var gallerySlider = tns({
    container: ".gallery-slider",
    items: 40,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#gallery-control",
    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1
        },
        300: {
            items: 1
        }
    }
});

form.addEventListener('submit', sendEmail);

function sendEmail() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email: 'pnichols789@gmail.com',
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
  