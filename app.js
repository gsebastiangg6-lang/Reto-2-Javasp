// 1. Arreglo de estudiantes proporcionado por el ejercicio
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

// 2. Función que busca por ID y retorna una Promesa
function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    // .find() recorre el arreglo y devuelve el primer objeto cuyo id coincida
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === id);

    // Si lo encuentra, la promesa se resuelve (éxito)
    if (estudianteEncontrado) {
      resolve(estudianteEncontrado);
    } else {
      // Si no existe, la promesa se rechaza (error)
      reject(`Error: No existe un estudiante con el ID ${id}.`);
    }
  });
}

// --- PRUEBAS SOLICITADAS EN EL EJERCICIO ---

// Caso 1: Búsqueda del estudiante con ID 2
console.log("Búsqueda del estudiante con ID 2");
buscarEstudiantePorId(2)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    console.log("------------------------");
  })
  .catch(error => {
    console.log(error);
  });

// Caso 2: Búsqueda del estudiante con ID 1
console.log("Búsqueda del estudiante con ID 1");
buscarEstudiantePorId(1)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    console.log("------------------------");
  })
  .catch(error => {
    console.log(error);
  });

// Caso 3: Búsqueda del estudiante con ID 10 (No existe)
console.log("Búsqueda del estudiante con ID 10");
buscarEstudiantePorId(10)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  })
  .catch(error => {
    console.log(error);
  });
