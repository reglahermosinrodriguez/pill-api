// Utilizando fetch para hacer una solicitud GET
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Verificamos si la respuesta es exitosa (código de estado 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    // Parseamos la respuesta como JSON y la devolvemos
    return response.json();
  })
  .then(data => {
    // Hacemos algo con los datos recibidos
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    // Manejamos los errores que puedan ocurrir durante la solicitud
    console.error('Error durante la solicitud:', error);
  });

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Trabajar con los datos obtenidos
    console.log(data); // Aquí puedes ver los datos que has obtenido
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

const postId = 1;

  fetch(`https://jsonplaceholder.typicode.com/posts/${1}/comments`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Trabajar con los datos obtenidos
    console.log(data); // Aquí puedes ver los datos que has obtenido
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

