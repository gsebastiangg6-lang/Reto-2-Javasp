// 1. Arreglo de estudiantes proporcionado por el ejercicio
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

// 2. Función que recibe el ID de un estudiante y retorna una Promesa
function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    // Búsqueda sobre el arreglo proporcionado
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === id);

    if (estudianteEncontrado) {
      // Si existe, la promesa se resuelve devolviendo la información del estudiante
      resolve(estudianteEncontrado);
    } else {
      // Si no existe, la promesa se rechaza con el mensaje de error exacto
      reject(`Error: No existe un estudiante con el ID ${id}.`);
    }
  });
}

// 3. Mostrar el resultado en consola utilizando .then() y .catch()
// Encadenamos las llamadas para que salgan en el orden exacto de la guía

console.log("Búsqueda del estudiante con ID 2");
buscarEstudiantePorId(2)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    console.log("------------------------");
  })
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    console.log("Búsqueda del estudiante con ID 1");
    return buscarEstudiantePorId(1);
  })
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    console.log("------------------------");
  })
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    console.log("Búsqueda del estudiante con ID 10");
    return buscarEstudiantePorId(10);
  })
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  })
  .catch(error => {
    console.log(error);
  });
