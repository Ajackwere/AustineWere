// Change the color of the navigation links when they are clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(otherLink => {
      otherLink.style.color = 'black';
    });
    link.style.color = 'red';
  });
});

// Show a message when the "HIRE ME" button is clicked
document.addEventListener("DOMContentLoaded", function() {
  var hireButton = document.getElementById("hireButton");
  hireButton.addEventListener("click", showDetails);

  function showDetails() {
    // Replace the placeholders with your own details
    var name = "Austine Jack Were";
    var email = "austinejackwere@gmail.com";
    var phone = "+25470041989";

    // Display the details in an alert
    var details = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone;
    alert(details);
  }
});

// Download CV document when "DOWNLOAD MY CV/RESUME" button is clicked
const downloadButton = document.querySelector('.details a');
downloadButton.addEventListener('click', () => {
  const cvUrl = 'https://drive.google.com/file/d/1orsp-2zWmygugz-t5dH79aojn8wv2dWa/view?usp=sharing'; //the actual URL of my CV document
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'Austine-Jack-Were-CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
