'use strict'
const person = {
  // name: ['Bob','Smith'],
  name: {
    first: 'Bob',
    Last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music','skiing'],
  bio: function(){
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function(){
    alert('Hi I\'m ' + this.name[0] + '.');
  } 
};

person.age = 45;
person['name']['last'] = 'Cratchit';

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;

// function createNewPerson(name){
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function(){
//     alert('Hi I\'m ' + obj.name + '.');
//   };
//   return obj;
// }

// function Person(first,last,age,gender,interests){
//   this.name = {
//     first : first,
//     last : last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function(){
//     alert(this.name.first + ' ' + this.name.last + ' is '+ this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   };
//   this.greeting = function(){
//     alert('Hi I\'m ' + this.name.first + '.');
//   };
// }

////////////////////////////////////
function Person(first, last, age, gender, interests){
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function(){
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    var pronoun;

    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
      pronoun = 'He likes ';
    }else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F'){ 
      pronoun = 'She likes ';
    }else{
      pronoun = 'They like ';
    }
    
    string += pronoun;

    if(this.interests.length === 1){
      string += this.interests[0] + '.';
    }else if(this.interests.length === 2){
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    }else{
      for(var i = 0; i < this.interests.length; i++){
        if(i === this.interests.length  - 1){
          string += ' and ' + this.interests[i] + '.';
        }else{
          string += this.interests[i] + ', ';
        }
      }
    }
    alert(string);
  };
  this.greeting = function(){
    alert('Hi! I\'m ' + this.name.first + '.');
  };
};

let person3 = new Person('Matt', 'Smith', 27, 'male', ['music', 'sports', 'cooking', 'technology']);
let person5 = new person3.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

Person.prototype.farewell = function(){
  alert(this.name.first + ' has left the building. Bye for now!');
};

//////////////////////////////////////////
let person1 = new Object();
person1.name = 'Camp';
person1['age'] = 38;
person1.greeting = function(){
  alert('Hi I\'m ' + this.name + '.');
};
//
let person2 = new Object({
  name: 'James',
  age: 26,
  greeting: function(){
    alert('Hi! I\'m ' + this.name + '.');
  }
});
//
let person4 = Object.create(person2);


///////////////////////////////////////////
// function User(userid){
//   this.id = userid;
//   this.plans = [];
// }

// User.prototype.getPlans = function(callback){
//   var self = this;
//   var url = app.plansServer + '/plans/' + this.id;
//   var request = new XMLHttpRequest({
//     mozAnon: true,
//     mozSystem: true});
//     request.onload = function(){
//       console.log('DEBUG: plans loaded from server');
//       self.initiatePlans(this.responseText);
//       self.displayPlans();
//       if(callback){
//         callback();
//       }      
//     };
//     request.onerror = function(error){
//       console.log('DEBUG: Failed to get plans from ‘‘' + url + '’’', error);
//     };
//     request.open("get", url, true);
//     request.send();
// };

// User.prototype.reloadPlans = function(){
//   for(var i = 0; i < this.plans.length; i++){
//     this.plans[i].removeUI();
//   }
//   this.plans = [];
//   localStorage.setItem('plans', '[]');
//   this.getPlans(app.toggleSettings);
// };

// User.prototype.initiatePlans = function(plansString){
//   var plans = JSON.parse(plansString);
//   for(var i = 0; i < plans.length; i++){
//     this.plans.push(new Plan(plans[i]));
//   }
// }

// User.prototype.loadPlans = function(){
//   var plans = localStorage.getItem('plans');
//   if(plans === null){
//     return this.getPlans();
//   }
//   console.log('DEBUG: plans loaded from device');
//   this.initiatePlans(plans);
//   this.displayPlans();
// };

// User.prototype.displayPlans = function(){
//   var self = this;
//   navigator.globalization.getDataNames(function(dayOfWeek){
//     var deck = document.getElementById('plan-group');
//     var tabbar = document.getElementById('plan-group-men');
//     for(var i = 0; i < self.plans.length; i++){
//       self.plans[i].createUI(deck, tabbar, dayOfWeek);
//     }
//   }, function(){}, {type: 'narrow', item: 'days'});
// };

// function Plan(plan){
//   this.schedule = plan.week;
//   this.tittle = plan.tittle;
//   this.id = plan.id;
//   this.active = plan.active;
//   this.tab = null;
//   this.card = null;
//   this.table = null;
// };

// Plan.prototype.selectTab = function(deck){
//   var self = this;
//   function selectActiveTab(){
//     if(!self.tab.targetElement){
//       return window.setTimeout(selectActiveTab, 100);
//     }
//     deck.showCard(self.tab.targetElement);
//   }
//   selectActiveTab();
// };

/////////////////////////////////////////////Prototype inheritance
const input = document.getElementById('jscode');
const btn = document.getElementById('btn');
const para = document.getElementById('paragragh');

btn.onclick = function(){
  const code = input.value;
  para.style.color = 'white';
  para.textContent = eval(code);
  
}

//Personn
function Personn(first, last, age, gender, interests){
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Personn.prototype.biog = function(){
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  let pronoun;
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
    pronoun = 'He likes ';
  }else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F'){
    pronoun = 'She likes ';
  }else{
    pronoun = 'They like ';
  }
  string += pronoun;

  if(this.interests.length === 1){
    string += this.interests[0] + '.';
  }else if (this.interests === 2){
    string += this.interests[0] + 'and ' + this.interests[1] + '.';
  }else{
    for(let i = 0; i < this.interests.length; i++){
      if( i === this.interests.length - 1){
        string += ' and ' + this.interests[i] + '.';
      } else {
      string += this.interests[i] + ',';
      }
    }
  }
  alert(string);
};

Personn.prototype.greeting = function(){
  alert('Hi! I\'m ' + this.name.first + '.');
};

Personn.prototype.farewell2 = function(){
  alert(this.name.first + ' has left the building. Bye for now!');
}

let person6 = new Personn('Jey', 'Roberts', 35, 'Male', ['desing', 'flowering', 'Halloween']);

//Teacher
function Teacher(first, last, age, gender, interests, subject){
  Personn.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Personn.prototype);

Teacher.prototype.constructor = Teacher;
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false,
//   writable: true });

Teacher.prototype.greeting = function(){
  let prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  }else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Ms.';
  } else {
    prefix = 'Mx.';
  }
  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

//Student 
function Student(first, last, age, gender, interests, favoriteClass){
  Personn.call(this, first, last, age, gender, interests);
  this.favoriteClass = favoriteClass;
}

Student.prototype = Object.create(Personn.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function(){
  alert('Yo! I\'m ' + this.name.first + ' and my favorite subject is '+ this.favoriteClass + '.');
};

let student1 = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets'], 'science');


/////////////////////////////////////////////////////Clases
class Perrson {
  constructor(first, last, age, gender, interests){
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting(){
  console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell(){
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Perrson ('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Perrson ('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();

//teacher
// class Teacherr extends Perrson{
//   constructor(first, last, age, gender, interests, subject, grade) {
//     super(first, last, age, gender, interests);
//     this.subject = subject;
//     this.grade = grade;
//   }
// }

// let snape = new Teacherr('Severus', 'Snape', 58, 'male', ['potions'], 'Dark arts', 5);
// snape.greeting();
// snape.farewell();
// console.log(snape.age); 
// console.log(snape.subject);

//student
class Studentt extends Perrson{
  constructor(first, last, age, gender, interests, FavClass,){
    super(first, last, age, gender, interests);
    this.FavClass = FavClass;
  }
}

let james = new Studentt('James', 'Smith', 39, 'Male', ['DJ'], 'music');
console.log(`My name is ${james.name.first} ${james.name.last}. I am ${james.age} years old, and my favorite class is ${james.FavClass} as a student.`);

///////////////////////Getters and Setters

class Teacherr extends Perrson{
  constructor (first, last, age, gender, interests, subject, grade){
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade = grade;
  }

  get subject(){
    return this._subject;
  }

  set subject(newSubject){
    this._subject = newSubject;
  }
}

let snape = new Teacherr('Severus', 'Snape', 58, 'male', ['potions'], 'Dark arts', 5);
console.log(snape.subject);

snape.subject = 'Balloon animals';
console.log(snape.subject);


//////////////////////////////////////////////////JSON
const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
//request.responseType = 'json';
request.send();

request.onload = function(){
  const superHeroesText = request.response;
  //const superHeroes = request.response; This line and the above one is another way to convert a JSON object to a Javascript file.
  //parse() Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
  //stringify() Accepts an object as a parameter, and returns the equivalent JSON string.
  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function populateHeader(obj){
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Hometown' + obj['homeTown'] + ' // formed: ' + obj['formed'];
  header.appendChild(myPara );
}

function showHeroes(obj){
  const heroes = obj['members'];

  for(let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers: ';

    const superPowers = heroes[i].powers;
    for(let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

///////////////////////////////// This is an example with .stringify()
let myObj = { name: "James", age: 38 };
myObj
let myString = JSON.stringify(myObj);
myString
console.log(myObj);
console.log(myString);


/////////////////////////////////////////////////////Bouncing balls
const paragh = document.getElementById('Paragh');
let count = 0;

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// To generate a ramdon number
function random(min, max){
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

//Define Shape constructor
function Shape(x, y, velX, velY, exists){
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

//Define Ball constructor, inheriting from Shape
function Ball(x, y, velX, velY, exists, color, size){
  Shape.call(this, x, y, velX, velY, exists);
  
  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

//Define ball draw method
Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

//Define ball update method
Ball.prototype.update = function(){
  if((this.x + this.size) >= width){
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0){
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height){
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0){
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

//Define a ball collision detection
Ball.prototype.collisionDetect = function(){
  for(let j = 0; j < balls.length; j++){
    if (!(this === balls[j])) { 
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
};

//Define EvilCircle constructor, inheriting from Shape
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 10, 10 , exists);

  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

//Define EvilCircle draw method
EvilCircle.prototype.draw = function(){
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};

//Define EvilCircle checkBounds method
EvilCircle.prototype.checkBounds = function(){
  if((this.x + this.size) >= width){
    this.x -= this.size;
  }
  if((this.x - this.size) <= 0){
    this.x += this.size;
  }
  if((this.y + this.size) >= height){
    this.y -= this.size;
  }
  if((this.y - this.size) <= 0){
    this.y += this.size;
  }
};

//define EvilCircle setControls method
EvilCircle.prototype.setControls = function(){
  var _this = this;
  window.onkeydown = function(e) {
    if(e.key === 'a'){
      _this.x -= _this.velX;
    }else if(e.key === 'd'){
      _this.x += _this.velX;
    }else if(e.key === 'w'){
      _this.y -= _this.velY;
    }else if(e.key === 's'){
      _this.y += _this.velY;
    }
  };
};

//Define EvilCircle collision detection
EvilCircle.prototype.collisionDetect = function(){
  for(let k = 0; k < balls.length; k++){
    if(balls[k].exists){
      const dx = this.x - balls[k].x;
      const dy = this.y - balls[k].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < this.size + balls[k].size){
        balls[k].exists = false;
        count--;
        paragh.textContent = 'Ball count: ' + count;
      }
    }
  }
};

//Define array to store balls and populate it
let balls = [];

while(balls.length < 25){
  let size = random(10,20);
  let ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    true,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
    size
  );  
  balls.push(ball);
  count++;
  paragh.textContent = 'Ball count: ' + count;
}

//Define loop that keeps drawing the scene constantly
let evil = new EvilCircle(random(0,width), random(0,height), true);
evil.setControls();

function loop(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for(let i = 0; i < balls.length; i++){
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }  
  }
  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();




