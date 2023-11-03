// Get the form element
const form = document.getElementById('myForm');

// Add an event listener for the form submit event
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server using axios
  axios
    .post('https://example.com/api/submit-form', formData)
    .then(function (response) {
      // Handle the response from the server
      console.log('Form data submitted successfully!');
    })
    .catch(function (error) {
      // Handle errors
      console.log(error);
    });
});
