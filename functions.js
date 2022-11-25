
 export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'Leodu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

let arrAge=[]

for (let i = 0; i <= students.length-1 ; i++) {
  arrAge.push(students[i].age)
}
console.log(arrAge)