// alert("hellow")
// let email = <a href="haseeburrehmanjs@gmail.com">haseeburrehmanjs@gmail.com</a>
// alert('My Email Is ' + email)
// alert("jawad \ndream")

// 4 tarha ki data types hoti ha filhal

// 1 string "ejdsn4383029"
// 2 number 6738
// 3Boolean true ya false
// 4 object 
var userName = "jawad"
var age = 19
var education = "X!!"
var value = true
var value2 = true
var address = "Malir kalaboard"
console.log(userName);
console.log(age);
console.log(education);
console.log(address);
console.log(userName + " " + age + " " + education + " " + address)
var Age1 = 62;
var Age2 = 63;
var Age3 = "64";
var Age4 = "65";
console.log(Age2 + Age1);
console.log(Age2 + " " + Age1);
console.log(Age3 + Age1 + Age2);
console.log(Age3 + Age4);
// var Age1 = prompt("enter first number");
// var Age2 = prompt("enter second number");
// var Age3 = +prompt("enter THIRD number");//agar prompt sa paily + laga hoto or agar hum number ki jaga string dalda to not a number ata ha Q ka prompt sa paihly + lagana sa value number banjati ha or by default string hoti ha value
// var Age4 = +prompt("enter fourth number");
console.log(Age1 + Age2);
console.log(Age3 + Age4);
console.log(Age3);

//-----ASSINMENT OPERATER-----//

var num1 = 20;
// console.log(num1=num1+10);
// line number 38 ka 1 short form bhi ha wo nicha likhi ha
console.log(num1 += 10);
// num1-=10
// num1*=10
// num1/=10
console.log(num1 + 15);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 <= "10");
console.log(9 <= "10");
// xclination mark (!) ka madlab ha not
// xclination mark(!) single = ki value rakhta ha
console.log(10 != 10);
console.log(10 == "10");
// tripple equal to data type bhi check krta ha (===) 
console.log(10 === "10");
console.log(10 !== "10");//kia number 10 barabar nahi ha string ka number 10 ka '10'
console.log(10 != "10");
console.log(2 == 2.0);
console.log(2 != 2.0);
console.log(0.3 === 0.1 + 0.2);
console.log(0.3 !== 0.1 + 0.2);
console.log(10 !== 10);
// double equal to data type bhi check krta ha (==) xclination mark(!) ka sath
// && = and
// || = OR
var comparisions = 10 <= 10 || 10 < 6;
console.log(comparisions)
// (|| = OR)jitni bhi conditions ho unma sa agar 1 bhi true hui to wo nicha true batada ga answer ma
// (& = and) is parallel of OR
var comparision = 10 >= 10 && 10 > 6;
console.log(comparision);


// hum prom ma or console ma bracket () ka ander koi chez inverted commas "" ma jabhi likhta ha jub hum na wo chez first time likhi ho or baghir "" ka tub likhanga jub wo chez uper humna console ma ya var am likhi hui ho uper

var english = 60;
var math = 41;

// var english = +prompt("english marks");
// var math = +prompt ("math marks");
var obtain = english + math;
var totalmarks = 200;
console.log(obtain);
console.log(totalmarks);
console.log(obtain / totalmarks * 100 + "%")




// var english = +prompt("english marks");
// var math = +prompt("math marks");
// var obtain= english + math;
// var totalmarks= 200;
// console.log(obtain);
// console.log(totalmarks);
// console.log(obtain/totalmarks*100 + "%");



// jub hum simple if lagainga to if ka ander jo condition hogi wo agar true hui to if run kraga warna kuch bhi nahi hoga

// agar hum if & else dono lagainga to  if ka ander jo condition hogi wo agar true hui to if run kraga warna else run kraga

// var persentage = +prompt("what is your persentage")
// if (persentage >= 50){
//     console.log("malik pass hogia")
// }
// else{
//     console.log("malik fail hogia")
// }



// var num = +prompt("number dal da")
// if(num > 5 ){
//     console.log("ifi")
// }
// else{
//     console.log('elses')
// }


var height = 40
// var height = +prompt("Put the height")
if (!(height > 20)) {
    console.log("not accept")
}
else if (height > 30) {
    console.log("Accepted")
}
else {
    console.log("just accepted")
}



// var salery = +prompt("Please tell me a salery")
// if(salery >= 100000){
//     console.log("I will convince my father")
// }
// else if(salery<=80000){
//    console.log("my father will never agree")
// }
// else{
//     console.log("maybe my father will accept")
// }

// var Age = +prompt("Enter your age" )
// if( Age >= 28 ){
//     console.log(" abba nahi manga")
// }
// else if( 22 <= Age  ){
//    console.log("ma abba ko manalongi ")
// }
// else if( 18 <= Age  ){
//     console.log("bs thora bara hojaw ")
//  }
// else{
//     console.log("bara ho ka a ")
// }

// var num = +prompt("code dala")
// if( num > 100 ){
//     console.log("code sahi ha")
// }

// else{
//     console.log("code ghalat ha")
// }
// in sub ki tarha 1 nested if else bhi hota ha jis ma hum if ka ander 1 or 1 or condition lagata ha 



// ++num pre increment
// num++ post increment

// double plus ++ , double minus -- sirf 1 ka lia ha baki or numbers ka lia simple add or subract kranga

var num = 10;

// console.log(num + 1);

console.log(++num);
console.log(++num);
console.log(num++);
console.log(++num);
console.log(num++);
console.log(++num);
console.log(num++);
console.log(++num);
console.log(num++);

console.log(num);

var calculate = ++num + num++ + ++num + --num + num-- + num++ + ++num;

console.log(calculate, 19 + 19 + 21 + 21 + 23 + 23 + 25);

// var division = +prompt("write here even number")
// console.log(division%2)

// // var num = +prompt("number dal");
// if(num % 2 === 0){
//     console.log("even number dala ha aap na")
// }
// else{
//     console.log("odd number dala ha aap na")
// }



// is function ka use hum islia krta ha Q ka hum console ka ander value bar bar na likha simple kahi bhi function ka nam likha or usa cole carwada ha

// or jo {} hota ha inha scope katha ha




// function greetUser (){   
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// }

// greetUser()
// greetUser()

// is tarika sa HTMl ka kam javascript ka zariya change hota ha jo mana line no 220,221,222 ma kia ha

var jawad = document.querySelector("#jawad")
jawad.innerHTML = "java"
console.log(jawad.innerHTML);


var heads = document.querySelector("#jawadjj")
heads = "hasnain"
console.log(heads)



var greatUsers = document.querySelector(".heading");
function greatusers() {
    console.log(greatUsers.innerHTML);
    greatUsers.innerHTML = "jawad jawad";
}




//undefined
//null

// var username ;
// console.log(username)




// agar is function ma mujha kuch bhi extra likhna hoga to ma console ma "" string laga ka likhanga asuguial

// function ka name ka bad () ma jo likhta ha usa katha ha parameter function greetUser"(username , lastname , age)" 

// function ko call krta hua jo hum value likhta ha usa katha ha argument "greetUser"('abdullah' , 'khan' , 20)""

// or jo {} ka ander hota ha usa katha ha scope

function greetUsere(username, lastname, age) {
    console.log('hello ' + username + lastname + age);
}

greetUsere('abdullah', 'khan', 20)



function greetUser(username, lastname, age) {
    console.log('hello ', username, lastname, age);
}

greetUser('abdullah', 'khan', 20)


// line no 254 ka console ma usernames ki jaga undefined araha ha abdullah ka bajay Q ka yaha pa mujha function kuch return nahi kraha 

function jawadUserse(usernames) {
    console.log('hello ' + usernames);
    return 'hello ' + usernames
}

var usernames = jawadUserse('abdullah');
console.log("username=>!", usernames);



// return ka ander ap jo chez bhi likhta ho wo scope ka bahar wala console ma show hoti ha
function jawadUsersjj(user1) {
    console.log('hello ' + user1);
    return 'hellow' + user1
}

var userss = jawadUsersjj('abdullah');
console.log("username=>", userss);


// variable function ka just uper bhi bansakhta ha 

var uservalue = jawadUsersgg('abdullah');
function jawadUsersgg(user2) {
    console.log('hello ' + user2);
    return 'jawad' + user2
}

console.log("username=>", uservalue);



// or variable function ka just nicha  bhi bansakhta ha 

function jawadUsersww(user3, user4) {
    console.log('hello ' + user3 + user4);
    // return 'jawad' + user3
    return 'jawad ' + user3 + user4
}

var usernames = jawadUsersww('abdullah', ' haseeb');
console.log("!username=> ", usernames);





function jawadUsers(user5, user6) {
    console.log('hello ' + user5 + user6);
    return 'jawad ' + user5 + user6
}

var usernames = jawadUsers('abdullah ', "hasnain");
console.log("username!=> ", usernames);





function sum(physics, maths) {
    console.log(physics, maths);
}
sum(50, 48)


// ya muja sir sa puchna ha ka jub ma uper wala function ko or nichay wala function ko Go live kartha ho to dono ki value same hojati ha 


// function sum(physics , maths) {
//     console.log(physics + maths);
// }
// sum(50 , 48)



// jub hum koi variablae scop ka ander banata ha to wo kahlata ha local variablae or jub hum koi variablae scop ka bahar banata ha to wo kahlata ha global variablae 

// global wala local ma empliment ho sakta ha lakin local wala global ma empliment nahi ho sakta

var lastname = 'khan '

function greatUser() {
    var usermain = 'abdullah '
    // return usermain= 'd'
    console.log(usermain + lastname);
}

// console.log(usermain)
// console.log(lastname)

// greatUser()




var heading = document.querySelector(".headsss")
console.log(heading.innerHTML);



var headings = document.querySelector(".heads");
function vipuser() {
    console.log(headings.innerHTML);
    headings.innerHTML = "jawad jawad";
}

console.log(headings.innerHTML);




// if ka ander paihly line ma jo word = ka bad likha hota ha wo or else ka ander jo word = ka bad likha hota ha wo dono html ma same hona chahiya

// or khas tor pa if & else wala same hona chahiya

var heading = document.querySelector('.headssss')
function myIntro() {
    console.log(heading.innerHTML);
    // heading.innerHTML='jj'
    if (heading.innerHTML === 'ahmed') {
        heading.innerHTML = "haseeb"
    } else {
        heading.innerHTML = 'ahmed'
    }
}





function calculateGrade() {
    var subject1 = parseInt(document.getElementById('subject1').value);
    var subject2 = parseInt(document.getElementById('subject2').value);
    var subject3 = parseInt(document.getElementById('subject3').value);
    var subject4 = parseInt(document.getElementById('subject4').value);

    var ObtainMarks = subject1 + subject2 + subject3 + subject4;
    var percentage = (ObtainMarks / 400) * 100;
    var grade = '';

    if (percentage >= 101) {
        grade = 'donky number to sahi dal';
    } else if (percentage >= 80) {
        grade = 'A1';
    } else if (percentage >= 70) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'total marks: ' + 400 + "<br>" + 'Obtained Marks: ' + ObtainMarks + '<br>' +
        'Percentage: ' + percentage.toFixed(2) + '%<br>' +
        'Grade: ' + grade;
}




let todo = document.querySelector('.jawadjj');
function clickon() {
    console.log(todo.value);
    todo.value = ""
}







// var chemMarks = document.querySelector('#chem-marks')
// var phyMarks = document.querySelector('#phy-marks')
// var mathMarks = document.querySelector('#math-marks')
// var comMarks = document.querySelector('#com-marks')
// var studentTotal = document.querySelector('#total-marks')
// var percentage = document.querySelector('#percentage')
// var grade = document.querySelector('#grade')


// function calculatePercentage() {
//     console.log(chemMarks.value);
//     console.log(phyMarks.value);
//     console.log(mathMarks.value);
//     console.log(comMarks.value);

//     var totalMarks = 400;
//     var obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value;
//     console.log('obtained marks ===>', obtainedMarks);
//     studentTotal.innerHTML = obtainedMarks;

//     var studentPercentage = obtainedMarks / totalMarks * 100;
//     percentage.innerHTML = studentPercentage;


//     if(studentPercentage > 80){
//         grade.innerHTML = 'A+'
//     }else if(studentPercentage > 70){
//         grade.innerHTML = 'A'
//     } else if(studentPercentage > 60){
//         grade.innerHTML = 'B'
//     }else{
//         grade.innerHTML = 'FAIL'
//     }
// }



let chemistrymarks = document.querySelector('#chem-marks')
let physicsmarks = document.querySelector('#phy-marks')
let mathmarks = document.querySelector('#math-marks')
let computermarks = document.querySelector('#com-marks')
let studentTotal = document.querySelector('#total-marks')
let percentage = document.querySelector('#percentage')
let grade = document.querySelector('#grade')


function calculatePercentage() {
    let obtainedMarks = (+chemistrymarks.value + +physicsmarks.value + +mathmarks.value + +computermarks.value);
    studentTotal.innerHTML = obtainedMarks
    // let  studentTotal = 
    let totalmarks = 400;
    percentage.innerHTML = obtainedMarks / totalmarks * 100
    if (percentage.innerHTML >= 100) {
        grade.innerHTML = `A<sup>1+</sup>`
    } else if (percentage.innerHTML >= 80) {
        grade.innerHTML = `A<sup>1</sup>`

    } else {
        `fail`
    }

}






// console.log('hello arrays');

// let
// const


// var username = 'abdullah'; // declare
// var username = 'usman';// redeclared
// username = 'ammar'; // reassign

// console.log(username)



// var
// redeclare
// reassign






// console.log(array);


// array ki jo counting yani indexno 0 sa || length 1 sa shoru hoti ha or ya simple array ha

let citiesss = ['karachi', 'lahore', 'islamabad', 'faislabad', 'hyderabad', 'sheikarpur'];

console.log(citiesss[3][2]);//is tarika sa hum array ka 3 word ka 2 letter pata karsakta ha
console.log(citiesss.length);//is tarika sa hum ray ka words ki counting maloom karsakta ha
console.log(citiesss[3]);// isma humna just third word maloom kia ha
console.log(typeof (citiesss));// isma humna just array ki type maloom ki ha


// ya nasted array ha
let cities = ['karachi', 'lahore', 'islamabad', 'faislabad', 'hyderabad', 'sheikarpur', 20, true, ['fb area', 'liyari', 'golimar']];
console.log(cities[8][2]);// is tarika sa hum nested array ka 
console.log(cities.length);
console.log(cities[3]);
console.log(typeof (cities))



let user = ['akhter', 'jawad', 'ahmed-shapater', 'haseeb', ['islamabad', 'karachi']]
console.log(`${user[0]} ${user[2]}`);// is tarika sa hum 1 single console ma 2 words dal sakta ha array ka

// console.log(user[0][2]);
console.log(user[3][0]);
console.log(user[4][1]);
console.log(user.length);
console.log(user[3]);
console.log(typeof (user));


user[0] = 'ammar';
user[4] = 'ali'
console.log(user[3])
console.log(user[0])


// const clintses = [];
// clintses[0] = prompt('enter name1')
// clintses[1] = prompt('enter name2')
// // clintses[2] = prompt('enter name3')
// console.log(clintses);
// document.write(clintses);





//push book ma haga
//pop book ma haga
//unshift ma haga
//shift ma haga
//splice ma haga
//slice ma haga
//split
//join
//concat
//sort
//reverse
//indexof
//includes

//push {last ma value add krna ka liya}
//pop {last ma value hata na ka liya}
//unshift {start ma value add krna ka liya}
//shift {start ma value hata na ka liya}
//splice{('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa') third wala optioonal ha}
//slice{ is ma 2 parameter receive hota ha or single parameter bhi receive hota ha isma ya hota ha ka first parameter ka agay ka dikha do or second parameter ka agay ka delete kardo,single parameter ma jo digit dalta ha ussay paihla ki values delete hojati ha}
//split {string ko array ma krana ka liya,or string ma convert corna ka lia bhi }
//join {Array ko string ma krna ka liya yani join krna ka lia}
//includes{just bollien ma ya batana ka lia ka wo value array ma ha ya nahi}
//indexof{bs index number batana ka lia ka konsa word ka kia number ha}
//reverse{array ko ulta krdata ha}
//sort{sequence ma lana ka lia ha}


let vegetable = ['bottle guard']

let fruit = [`apple`];

let fruits = ['kala', 'ahmed', 'gora', 'jawad', 'akhroot', fruit, vegetable]

console.log(fruits);




let array = ['akhter', 'jawad', 'ahmed-shapater', 'haseeb']

array.push(`ahmed`)//ya end ma word ko add kardata ha
array.pop()//ya end ma word ko mitadata ha
array.unshift(`jj`)//ya start ma word ko add kardata ha
array.shift()//ya start ma word ko mitadata  ha



// const fruitss = ['banana' , 'orange', 'mango'];
// fruits.push('watermelon');
// fruits.pop();
// fruits.unshift('watermelonss')
// fruits.shift()
// console.log(fruitss);



let dryFruits = ['kala', 1, 'ahmed', 'gora', 'jawad', 'akhroot', fruit, vegetable, 'watermelon', 'melon', 'mangoes', 'guava', 'nashpati', 'grapes', 'anaaar', 'kinno']

console.log(dryFruits.indexOf('ahmed'));
// document.write(dryFruits.indexOf)


let myfunc = item => {
    return item === `ahmed`
}
let z = dryFruits.findIndex(myfunc)
console.log(z);


// fruits.splice('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa') third wala optioonal ha


// dryFruits.splice(2, 1, 'stawberry')
// console.log(dryFruits);

dryFruits.splice(2, 3);
console.log(dryFruits);


// dryFruits.splice(6 , 2 , 'banana');

// console.log(dryFruits);

let ahmed = ['haseeb', 'hasnain', 'jawad', 'ebad', 'ali', 'ajaz', 'watermelon', 'melon', 'mangoes', 'guava', 'nashpati', 'grapes', 'anaaar', 'kinno']

// Example of slice() method
let VIPfruits = ["apple", "banana", "cherry", "date", "fig", "grape"];

// Use slice to get a portion of the array
let selectedFruits = VIPfruits.slice(1, 4);

console.log(selectedFruits); // Output: ["banana", "cherry", "date"]

let hNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let hSlice = hNumbers.slice(4);

console.log(hSlice); // Output: [5, 6, 7, 8, 9]



// const namess = 'Muhammad Abdullah khan';
// //const arr = namess.split(' ')
// const arr = namess.split('')
// console.log(arr);


const names = ['Muhammad', 'Abdullah', 'Khan'];
const star = names.join(' ')
// const star = names.join(' j   ')
console.log(star);


let fruitss = ['apple', 'orange', `strawberry`, 'banana'];
fruitss.sort((a, b) => {
    // return (b>a)-(b<a)
    return (a > b) - (a < b)
})
console.log(fruitss);


let aray = [6, 3, 5, 1, 2]
// aray.sort((a, b) => {
//     // return b-a
//     return a - b
// })
console.log(aray);


const city = ['lahore', 'islamabad', 'karachi', 'dha', 'punjab'];
let input = document.querySelector('#shop');
let remarks = document.querySelector('.headj');

function pushme() {
    // input.value=''
    if (city.includes(input.value)) {
        console.log('Item Available');
        remarks.innerHTML = `${input.value} are available`;
    } else {
        console.log(`item not available`);
        remarks.innerHTML = `${input.value} are not available`;
    }

}


// console.log('hello loops')

// there are three types of loops

//forLoop
//while loop
//do while loop


// for (let i = 0; i <= 10; i++) {
//     console.log('hello world', i);
// }



//infinite loop
// for (let i = 1; i > 0; i++) {
//     console.log(i);
// }


// nested loop
// for (let i = 1; i <= 5; i++) {
//     console.log('outer Loop ===> ' , i);
//     for(let j = 1; j <= 5; j++){
//         console.log('inner Loop===>' , j);
//     }
// }



for (let i = 0; i <= 10; i++) {
    console.log(`${i} ka table`);
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
}



// let times = +prompt('how many times do you want')
// let table = +prompt('which table')

// for (let i = 1; i <= times ; i++) {
// console.log(`${table}x${i}=${table*i}`);    
// }




// let frut = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];

// console.log(frut);
// const ul = document.querySelector('.ull');

//     for (let i = 0; i < frut.length; i++) {
//         ul.innerHTML += `<li>${frut[i]}</li>`
//         // ul.innerHTML += `<li>${frut,i}</li>`
//     }








let frutss = ['ali', 'ajaz', 'watermelon', 'melon', 'mangoes', 'guava', 'nashpati', 'grapes', 'anaaar', 'kinno'];
console.log(frutss);
let ull = document.querySelector('#ulMain')
function ol() {
    ull.innerHTML = ``
    for (let i = 0; i < frutss.length; i++) {
        console.log(frutss[i]);
        ull.innerHTML += `<li>${frutss[i]}</li>`
    }
}
// ol()


// let fruts = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];
// let ul = document.querySelector('#ul')
// function ol() {
//     ul.innerHTML = ''
//   for (let i = 0; i < fruts.length; i++) {
//     console.log(fruts[i],i); 
//     ul.innerHTML += `<li>${fruts[i]}</li>`
//    } 
// }


// while (condition) {

// }


// let fruts = ['apple', 'banana', 'orange', 'watermelon', 'grapes'];
// let ul = document.querySelector('#ul')
// function ol() {
//     ul.innerHTML = ''
//     let i = 0;
//     while (i < fruts.length) {

//         console.log(fruts[i], i);
//         ul.innerHTML += `<li>${fruts[i]}</li>`
//         i++
//     }
// }


// do {

// } while (condition);



let fruts = ['apple', 'banana', 'orange', 'watermelon', 'grapes'];
let ul = document.querySelector('#ul')
function ol() {
    ul.innerHTML = ''
    let i = 0;
    do {
        console.log(fruts[i], i);
        ul.innerHTML += `<li>${fruts[i]}</li>`
        i++
    }
    while (i < fruts.length)
}


