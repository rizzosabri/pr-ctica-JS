
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
  return console.log((arrAge.reduce(function(a, b){ return a + b; }))/arrAge.length)} 
  
  