
  export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  export function choiceName(gender){
    let nombre= ""
    if (gender==="female") { 
      nombre =availableFemaleNames[getRandomInt(availableFemaleNames.length-1)];}
    else {nombre=availableMaleNames [getRandomInt(availableMaleNames.length-1)];}
    return nombre;
  }

  export function edadMedia(students){ 
  let arrAge=[]
  for (let i = 0; i <= students.length-1 ; i++) {
    arrAge.push(students[i].age)
  }   
  return console.log(Math. round((arrAge.reduce(function(a, b){ return a + b; }))/arrAge.length))} 
  
  export function idexOfMaxNumberOfList(list){ 
    let maxNumber= list[0]
    let indexMaxNumber = 0
    for (let i = 0; i <= list.length-1 ; i++) {
      if (list[i]> maxNumber){ 
        maxNumber= list[i]
        indexMaxNumber= i
       }
    }     
    return indexMaxNumber  }  

    export function maxNumberOfList(list){ 
      let maxNumber= list[0]
      for (let i = 0; i <= list.length-1 ; i++) {
        if (list[i]> maxNumber){ 
          maxNumber= list[i]
         }
      }     
      return maxNumber  } 

      /*creo lista de lista de notas*/
 export function creoListaDeListas(objeto){
  let listScores= []
  for (let i = 0; i <= objeto.length-1 ; i++) {
      listScores.push(objeto[i].examScores)   
    }
    return listScores }


  /*creo lista con la sumatoria de notas de todos los alumnos*/
  export function listaDeSumatoria(listaDeListas){
  let listPlusScore=[]
  for (let i = 0; i <= listaDeListas.length-1 ; i++) {
    if (listaDeListas[i].length===0){listPlusScore.push(0)}
    else {
  listPlusScore.push((listaDeListas[i].reduce(function(a, b){ return a + b; })))}}
 
 return listPlusScore  }

   /*creo lista con la sumatoria de notas de todos los alumnos*/
   export function createlistaDePromedios(listaDeListas){
    let listPromdios=[]
    for (let i = 0; i <= listaDeListas.length-1 ; i++) {
      listPromdios.push(((listaDeListas[i].reduce(function(a, b){ return a + b; })))/listaDeListas[i].length)
   }return listPromdios }

   