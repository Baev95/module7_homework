// Задание 4

/* function ElectricalAppliance(brend, weigth) {
  this.object = 'Electrical appliance',
  this.weigth = `${weigth} g.`,
  this.brend = brend,
  this.OnRosette = false,
  this.canBuyIt = function(){
  	console.log(`Конечно можем!`)
  }
}


ElectricalAppliance.prototype.isOnRosette = function()
{
    console.log(`Потребляемая мощность прибора ${this.name} составляет ${this.power}.`);
    return this.OnRosette = true;
}

ElectricalAppliance.prototype.isOffRosette = function() {
		console.log(`Прибор ${this.name} не включен в розетку. `);
    return this.OnRosette = false;
}


function TV(name, weigth, price, power, brend) {
   this.name = name,
   this.weigth = `${weigth} g.`,
   this.power = power,
   this.price = `${price}$.`,
   this.onSerial = function(){
   	if ( this.OnRosette == true){
    console.log(`Какой сериал будем смотреть?`)
    } else {
    console.log(`Включи телевизор!`)
    }
   }
}

function Mobile(name, weigth, price, power, brend) {
  this.name = name,
  this.weigth = `${weigth} g.`,
  this.power = power,
  this.brend = brend,
  this.price = `${price}$.`
}


TV.prototype = new ElectricalAppliance("Sony", 200);
Mobile.prototype = new ElectricalAppliance("IPhone", 162);


const sony = new TV('Sony 31 x 13', 203, 9.42, 590);

const iPhone = new Mobile('IPhone 12', 162, 16.62, 234);
const samsung = new Mobile('Galaxy A22s 5G', 162, 16.62, 156, `Sumsung`);

console.log(sony);
console.log(samsung);
console.log(iPhone)
console.log(sony.isOnRosette())
console.log(sony.onSerial()) 
console.log(sony.isOnRosette())
console.log(sony.onSerial())
console.log(samsung)
console.log(iPhone.canBuyIt())
console.log(iPhone.isOnRosette())
console.log(iPhone.isOffRosette()) */

// Альтернативный вариант (разница в методе включения прибора)

/* function ElectricalAppliance(brend, weigth) {
  this.object = 'Electrical appliance',
    this.weigth = `${weigth} g.`,
    this.brend = brend,
    this.statusTurnedDevice = false
}

// Вариант одной функции вместо двух (on и off)
ElectricalAppliance.prototype.changeStatusTurnedDevice = function() {
  if (this.statusTurnedDevice == false) {
    console.log(`Потребляемая мощность прибора ${this.name} составляет ${this.power}.`);
     this.statusTurnedDevice = true;
  } else {
    console.log(`Прибор ${this.name} не включен в розетку. `);
     this.statusTurnedDevice = false;
  }
}

function TV(name, weigth, price, power, brend) {
  this.name = name,
    this.weigth = `${weigth} g.`,
    this.power = power,
    this.price = `${price}$.`,
    this.onSerial = function() {
      if (this.OnRosette == true) {
        console.log(`Какой сериал будем смотреть?`)
      } else {
        console.log(`Включи телевизор!`)
      }
    }
}

function Mobile(name, weigth, price, power, brend) {
  this.name = name,
    this.weigth = `${weigth} g.`,
    this.power = power,
    this.brend = brend,
    this.price = `${price}$.`
}


TV.prototype = new ElectricalAppliance("Sony", 200);
Mobile.prototype = new ElectricalAppliance("IPhone", 162);


const sony = new TV('Sony 31 x 13', 203, 9.42, 590);

const iPhone = new Mobile('IPhone 12', 162, 16.62, 234);
const samsung = new Mobile('Galaxy A22s 5G', 162, 16.62, 156, `Sumsung`);

console.log(sony)
console.log(sony.changeStatusTurnedDevice())
console.log(sony)
console.log(sony.changeStatusTurnedDevice())
console.log(samsung) 
console.log(samsung.changeStatusTurnedDevice()) 
console.log(samsung) 
console.log(iPhone) 
console.log(iPhone.changeStatusTurnedDevice()) 
console.log(iPhone) */

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и т.д.