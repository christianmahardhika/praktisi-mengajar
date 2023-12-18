// Get the form element
const form = document.getElementById('myForm');

// Add an event listener for the form submit event
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  let payload = JSON.stringify({
    title: formData.get('Title'),
    body: formData.get('Body'),
    userId: formData.get('UserId'),
  });

  // console.log(formData.get('name'));
  // console.log(formData.get('email'));

  // Send the form data to the server using axios
  axios
    .post('https://jsonplaceholder.typicode.com/posts', payload)
    .then(function (response) {
      // Handle the response from the server
      console.log(response.status);
      console.log(response.data);
      console.log('Form data submitted successfully!');
    })
    .catch(function (error) {
      // Handle errors
      console.log(error);
    });
});
