document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var loadersdiv = document.querySelector(".loadersdiv");
      var contactformdiv = document.querySelector(".contactformdiv");
  
      loadersdiv.style.display = "none";
      contactformdiv.style.display = "block";
    }, 10000);
  });

    const submitButton = document.getElementById("submit-button");
    const displayArea = document.getElementById("display-area");

    submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const rating = document.querySelector('input[name="rating"]').value;
    const contactTime = document.querySelector('input[name="contact-time"]:checked').value;
    const emotions = Array.from(document.querySelectorAll('input[name="emotions[]"]:checked')).map(input => input.value);
    const experience = document.querySelector('textarea[name="positive-experience"]').value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("rating", rating);
    localStorage.setItem("contactTime", contactTime);
    localStorage.setItem("emotions", JSON.stringify(emotions));
    localStorage.setItem("experience", experience);

    displayArea.innerHTML = `
      <h2>Your Details</h2>
      <p>Name: ${localStorage.getItem("name")}</p>
      <p>Email: ${localStorage.getItem("email")}</p>
      <p>Rating: ${localStorage.getItem("rating")}</p>
      <p>Contact Time: ${localStorage.getItem("contactTime")}</p>
      <p>Emotions: ${JSON.parse(localStorage.getItem("emotions")).join(", ")}</p>
      <p>Positive Experience: ${localStorage.getItem("experience")}</p>
    `;
  });