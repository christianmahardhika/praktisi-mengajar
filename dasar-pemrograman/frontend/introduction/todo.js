// Send the request
axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // Success! Parse the JSON response
    const data = response.data;
    // Display the data on the page
    document.getElementById('data').innerHTML = data.map(
      (item) => `
    <p>ID: ${item.id}</p>
    <p>Title: ${item.title}</p>
    <p>IsComplete: ${item.completed}</p>
    <hr />
    `
    );
  })
  .catch(function (error) {
    // Error!
    console.log(error);
  });
