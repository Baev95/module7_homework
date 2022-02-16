// Задание 1

/* function forInPerson(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': ' + obj[key])
    }
  }
}

const person = {
  name: "Yura",
  surname: "Baev",
  age: 26,
  student: true,
}


forInPerson(person) */

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

// Задание 2

/* const person = {
  name: "Yura",
  surname: "Baev",
  age: 26,
  student: true,
}

function comparArg(str, obj) {
  for (let key in obj) {
    if (str == obj[key]) {
      return true;
    }
  }
  return false;
}

console.log(comparArg("Baev", person));
console.log(comparArg("Baev Yura", person));
console.log(comparArg(26, person));
console.log(comparArg(true, person));
console.log(comparArg("IBaev", person));
console.log(comparArg("student", person)); */


// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

// Задание 3

/* function newObj(){
  const ObjWithoutPrototype = Object.create(null);
  ObjWithoutPrototype.text = "Prototype false"
  return ObjWithoutPrototype
 }
 
 console.log(newObj()) */

// Написать функцию, которая создает пустой объект, но без прототипа.