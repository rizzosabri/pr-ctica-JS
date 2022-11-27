
import readline from 'readline';
import { getRandomInt } from './myFunctions.js';
import { getRandomArbitrary } from './myFunctions.js';
import { choiceName } from './myFunctions.js';
import { edadMedia } from './myFunctions.js';
import { idexOfMaxNumberOfList } from './myFunctions.js';
const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]


const availableGenders = ['male', 'female'];


//para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// productor
async function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
    rl.question('Introduce un número: ', (num) => {
      rl.pause();
      resolve(parseInt (num))
      // si el usuario mete un número, resolvemos la promesa con ese número.
      // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })

  return promise;
}



let numberFromConsole = 0


do{
console.log(" Elija un numero del Menu: \n1- Ver todos los alumnos. \n2- Ver la cantidad de alumnos que hay en clase \n3- Ver los nombres de los alumnos. \n4- Eliminar el último alumno de la clase. \n5- Eliminar un alumno aleatoriamente de la clase.\n6- Ver los datos de los alumnos que son chicas.\n7- Ver el número de chicos y chicas que hay en la clase.\n8- Ver true o false por consola si todos los alumnos de la clase son chicas.\n9- Ver los nombres de los alumnos que tengan entre 20 y 25 años.\n10- Añadir un alumno nuevo.\n11- Ver el nombre de la persona más joven de la clase.\n12- Ver la edad media de todos los alumnos de la clase.\n13- Ver la edad media de las chicas de la clase.\n14- Añadir nueva nota (de manera aleatoria)a los alumnos. \n15- Ver los alumnos alfabéticamente según su nombre. ")
// consumidor1
numberFromConsole = await getNumberFromConsole()

switch(numberFromConsole) {
  case 1: 
  /* ### 1- Mostrar en formato de tabla todos los alumnos. */
    console.table(students)
    break;
  case 2:
  /* ### Mostrar por consola la cantidad de alumnos que hay en clase. */
    console.log(students.length)
    break;
  case 3:
  /* ### Mostrar por consola todos los nombres de los alumnos */
  for (let i = 0; i <= students.length-1 ; i++) {
    console.log(students[i].name) 
    }
   break;
  case 4:
    /* ### Eliminar el último alumno de la clase. */
    students.pop()
    break;
  case 5:
    /* ### Eliminar un alumno aleatoriamente de la clase. */
    students.splice(getRandomInt(students.length),1)
    break;
  case 6:
    /* ### Mostrar por consola todos los datos de los alumnos que son chicas. */
    for (let i = 0; i <= students.length-1 ; i++) {
      if (students[i].gender== "female"){
      console.log(students[i]) 
      } }     
      break; 
  case 7:
    /* ### Mostrar por consola el número de chicos y chicas que hay en la clase. */
    let numberFemale =0;
    let numberMale =0;
    for (let i = 0; i <= students.length-1 ; i++) {
        if (students[i].gender== "female"){
        numberFemale= numberFemale+ 1;
        }else {numberMale= numberMale + 1; } } 
        console.log("Cantidad de alumnos de genero FEMENINO: ", numberFemale ,"\nCantidad de alumnos de genero MASCULINO: ", numberMale)
        break;
  case 8:
    /* ### Mostrar true o false por consola si todos los alumnos de la clase son chicas */
    let result=true
    for (let i = 0; i <= students.length-1 ; i++) {
      if (students[i].gender== "male"){
        result= false;} } 

    console.log(result)    
    break;  
  case 9:
      /* Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años. */
      let alumnos25y30 = students.filter(students => students.age > 20  & students.age<25);
      for (let i = 0; i <= alumnos25y30.length-1 ; i++) {
        console.log(alumnos25y30[i].name) 
        }
      if (alumnos25y30=[]){ console.log("NO HAY ALUMNOS CON ESAS EDADES.")}
      break;
  case 10:
        /* ### Añadir un alumno nuevo con los siguientes datos:aleatorios (nombre y el género tienen que ir acordes). */
      let randomGender= availableGenders[getRandomInt(2)]
      let randomage= Math. round(getRandomArbitrary(20, 50))
      students.push({age: randomage , examScores: [] , gender: randomGender, name: choiceName(randomGender)})
        break; 
  case 11:
        /* ### Mostrar por consola el nombre de la persona más joven de la clase.. */
        let nameYounger=""
        let numberAgeYunger=students[0].age
        
        for (let i = 0; i <= students.length-1 ; i++) {
          if(students[i].age <= numberAgeYunger) {
            nameYounger = students[i].name
            numberAgeYunger = students[i].age
          }
          }
          console.log(nameYounger)  

      break; 
  case 12:
    /* ###Mostrar por consola la edad media de todos los alumnos de la clase */
 edadMedia(students);
    
    break;
  case 13:
      /* Mostrar por consola la edad media de las chicas de la clase. */
      let alumnosFemale = students.filter(students => students.gender == "female" );
      edadMedia(alumnosFemale)
      break;
  case 14:
        /* ### Añadir nueva nota a los alumnos. Por cada alumno de la clase,
         tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas. */
         for (let i = 0; i <= students.length-1 ; i++) {
        let notaAleatoria = Math. round(getRandomArbitrary(0, 10))
        students[i].examScores.push(notaAleatoria)
    }
         break; 
  case 15:
        /* ### Ordenar el array de alumnos alfabéticamente según su nombre. */
       students.sort(function(a,b) {
          
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        })
        console.log(students)
      break; 
case 16:
  /* ###16- Mostrar por consola el alumno de la clase con las mejores notas.*/
  /*creo lista de lista de notas*/
  let listScores= []
  for (let i = 0; i <= students.length-1 ; i++) {
      listScores.push(students[i].examScores)   
    }
  /*creo lista con los totales de todos los alumnos*/
  let listPlusScore=[]
  for (let i = 0; i <= listScores.length-1 ; i++) {
  listPlusScore.push(listScores[i].reduce(function(a, b){ return a + b; }))
 }

  console.log ("El alumno con mejores notas es :", students[idexOfMaxNumberOfList(listPlusScore)])
  break;
  case 17:

}
}while(numberFromConsole!== 0 && numberFromConsole>=1 && numberFromConsole<=16);