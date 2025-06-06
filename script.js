// Toggle main mobile nav
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdowns on mobile
const dropdownToggles = document.querySelectorAll('.dropdown > a');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    // Only enable on mobile
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent navigation
      const parent = toggle.parentElement;
      parent.classList.toggle('active');
    }
  });
});


// Contact Page Form Submission 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          successMsg.style.display = "block";
          form.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Network error. Please try again.");
      });
  });
});
