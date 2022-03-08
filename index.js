// Iteration 1

/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes() */

const movies = [
    { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
    { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
    {
      title: "Solo en Whatsapp",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "El gato con guantes",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  
  const movieCategories = [];
  
  for (const movie of movies) {
    for (const category of movie.categories) {
      if (!movieCategories.includes(category)) {
        movieCategories.push(category);
      }
    }
  }
  
  console.log(movieCategories);

// Iteration 2

/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [

    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  const volumeInfo = { totalVolume: 0, totalCount: 0 };
  
  for (const user of users) {
    
    for (const key in user.favoritesSounds) {
      const favoriteSound = user.favoritesSounds[key];
      volumeInfo.totalVolume += favoriteSound.volume;
      volumeInfo.totalCount++;
    }
  }
  
  console.log(
    "El volumen medio de los sonidos favoritos es de: " +
      volumeInfo.totalVolume / volumeInfo.totalCount
  );

  // Iteration 3

  /* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario. */

  const listener = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  const favoritesSounds = [];
  
  for (const user of users) {
    for (const key in user.favoritesSounds) {
      if (favoritesSounds.length) {
        let favoriteSoundIsInside = false;
        for (const favoriteSound of favoritesSounds) {
          if (favoriteSound.name === key) {
            favoriteSoundIsInside = true;
            favoriteSound.count++;
            break;
          }
        }
  
        if (!favoriteSoundIsInside) {
          favoritesSounds.push({ name: key, count: 1 });
        }
      } else {
        favoritesSounds.push({ name: key, count: 1 });
      }
    }
  }
  
  console.log(favoritesSounds);

  // Iteration 4

  /* Crea una función llamada findArrayIndex que reciba como parámetros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro */

  function findArrayIndex(array, text) {
    
    for (let i = 0; i < array.length; i++) {
      
    let obj = array[i];
    
    if (obj === text) {
    
        return i;
      }
    }
  }
  
  const index = findArrayIndex(
    ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
    "Ajolote"
  );
  console.log(index);
  
  const index2 = findArrayIndex(
    ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
    "Mosquito"
  );
  console.log(index2);