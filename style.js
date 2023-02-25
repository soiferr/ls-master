// 1 задание

function keepElements(rip, n) {
    return rip.slice(0, n);
  }
let users = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let n = 5;
let result = keepElements(users, n);
console.log(result); 
console.log(users); 

//2 задание
function deleteSecondElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

let user = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let keep = deleteSecondElement(user);
console.log(keep); 
console.log(user); 

//3 задание 
function keepFirstNElements(arr, n) {
  return arr.slice(0, n);
}

let users1 = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let t = 4;
let shrek = keepFirstNElements(users1, t);
console.log(shrek); 
console.log(users1); 

//4 задание 
function keepNotes (arr1, arr2){
  return  arr1.concat(arr2);
} 
let names = ['Ethan', 'Lucas'];
let result2 = ['Emma, Olivia'];
let otherNames = keepNotes(names, result2);
console.log(names);
console.log(result2);
console.log(otherNames);

//5 задание 
function typeOff (ali) {
  let typeOn = ali.slice();
  for (let i = 0; i < typeOn.length; i++ ) {
      typeOn.push(typeOff[i])
  }
  return typeOn.reverse();
}

let students = ['Ava', 'Mia', 'Jax', 'Zoe'];
let modified = typeOff(students);
console.log(modified); 
console.log(students); 

