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
const hireButton = document.querySelector('#hire a');
hireButton.addEventListener('click', () => {
  alert('Thank you for your interest! Please contact me at austinejackwere@gmail.com.');
});
// Download CV document when "DOWNLOAD MY CV/RESUME" button is clicked
const downloadButton = document.querySelector('.detel a');
downloadButton.addEventListener('click', () => {
  const cvUrl = '/home/austine_were/Personal_Projects/portfolio/Personal_Portfolio_Website/AUSTINE JACK WERE_SOFTWARE ENG_CV.pdf'; // the actual URL or file path of my CV document
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'Austine-Jack-Were-CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
