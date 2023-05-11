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
document.addEventListener('DOMContentLoaded', () => {
  const hireButton = document.querySelector('#hire');
  hireButton.addEventListener('click', () => {
    alert('Thank you for your interest! Please contact me at austinejackwere@gmail.com.');
  }); 
});
// Download CV document when "DOWNLOAD MY CV/RESUME" button is clicked
const downloadButton = document.querySelector('.details a');
downloadButton.addEventListener('click', () => {
  const cvUrl = 'https://drive.google.com/file/d/1orsp-2zWmygugz-t5dH79aojn8wv2dWa/view?usp=sharing'; // the actual URL of my CV document
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'Austine-Jack-Were-CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
