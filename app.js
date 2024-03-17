// alert("hellow")
// alert("jawad \ndream")

// 4 tarha ki data types hoti ha

// 1 string "ejdsn4383029"
// 2 number 6738
// 3Boolean true ya false
// 4 ko badma dakhanga
var userName = ("jawad")
var age = (19)
var education = ("X!!")
var address = ("Malir kalaboard")
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
console.log(Age3 + " " + Age4);
console.log(Age3 + + Age4);
// var Age1 = prompt("enter first number");
// var Age2 = prompt("enter second number");
// var Age3 = +prompt("enter THIRD number");
// var Age4 = +prompt("enter fourth number");
console.log(Age1 + Age2);
console.log(Age3 + Age4);
var num1 = 20;
// num1=num1+10
// line number 34 ka 1 short form bhi ha wo nicha likhi ha
num1 += 10
// num1-=10
// num1*=10
// num1/=10
console.log(num1 + 15);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 >= "10");
console.log(9 <= "10");
// xclination mark (!) ka madlab ha not
console.log(10 != 10);
console.log(10 == "10");
console.log(10 !== "10");
console.log(10 != "10");
console.log(10 !== 10);
// double equal to data type bhi check krta ha (==) LockManager(!) ka sath
// && = and
// || = OR
var comparisions = 10 <= 10 || 10 < 6;
console.log(comparisions)
// (|| = OR)jitni bhi conditions ho unma sa agar 1 bhi true hui to wo nicha true batada ga answer ma
// (& = and) is parallel of OR
var comparision = 10 >= 10 && 10 > 6;
console.log(comparision);


// hum prom ma or console ma bracket () ka ander koi chez inverted commas "" ma jabhi likhta ha jub hum na wo chez first time likhi ho or baghir "" ka tub likhanga jub wo chez uper humna console ma ya var am likhi hui ho uper

// var english = +prompt("english marks");
// var math = +prompt ("math marks");
// var obtain = +(english + math);
// var totalmarks = 200;
// console.log(obtain);
// console.log(totalmarks);
// console.log(obtain/totalmarks*100+"%")




// var english = +prompt("english marks");
// var math = +prompt("math marks");
// var obtain= english + math;
// var totalmarks= 200;
// console.log(obtain);
// console.log(totalmarks);
// console.log(obtain/totalmarks*100 + "%");








// if ka ander jo condition hogi wo agar true hui to if run kraga warna elserun kraga

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



// var height = +prompt("Put the height")
// if(height < 20){
//     console.log("not accept")
// }
// else if( height > 30 ){
//   console.log("Accepted")
// }
// else{
//     console.log("just accepted")
// }



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

// double plus ++ , double minus -- sirf 1 ka lia ha baki or numbers ka lia simple add or subract kranga

// ++num pre increment
// num++ post increment
var num = 10;

// console.log(num + 1);

// console.log(++num);
// console.log(num++);
// console.log(++num);
// console.log(num++);
// console.log(++num);
// console.log(num++);
// console.log(++num);
// console.log(num++);


// var calculate = ++num + num++ + ++num + --num + num-- + num++ + ++num;

// console.log(calculate,11+11+13+12+12+11+13);

// // var division = +prompt("write here even number")
// // console.log(division%2)

// var num = +prompt("number dal");
// if(num % 2 === 0){
//     console.log("even number dala ha aap na")
// }
// else{
//     console.log("odd number dala ha aap na")
// }



// is function ka use hum islia krta ha Q ka hum console ka ander value bar bar na likha simple kahi bhi function ka nam likha or usa cole carwada ha

// or jo {} hota ha inha scope katha ha

var greatUsers = document.querySelector(".heading");


function greatusers() {
    console.log(greatUsers.innerHTML);
    greatUsers.innerHTML = "jawad jawad";
}

// console.log(greatUsers.innerHTML);

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

heads.innerHTML = "hasnain"
console.log(heads.innerHTML)




//undefined
//null

// var username ;
// console.log(username)




// agar is function ma mujha kuch bhi extra likhna hoga to ma console ma "" string laga ka likhanga asuguial

// function ka name ka bad () ma jo likhta ha usa katha ha parameter function greetUser"(username , lastname , age)" 

// function ko call krta hua jo hum value likhta ha usa katha ha argument "greetUser"('abdullah' , 'khan' , 20)""

// or jo {} ka ander hota ha usa katha ha scope

function greetUser(username, lastname, age) {
    console.log('hello ' + username + lastname + age);
}

greetUser('abdullah', 'khan', 20)



function greetUser(username, lastname, age) {
    console.log('hello ', username, lastname, age);
}

greetUser('abdullah', 'khan', 20)


// line no 254 ka console ma usernames ki jaga undefined araha ha abdullah ka bajay Q ka yaha pa mujha function kuch return nahi kraha 

// function jawadUsers(user){
//     console.log('hello '+user);
// }

//  var usernames = jawadUsers('abdullah');
//  console.log("username=>" , usernames);



// return ka ander ap jo chez bhi likhta ho wo scope ka bahar wala console ma show hoti ha


// variable function ka just uper bhi bansakhta ha 

var usernames = jawadUsers('abdullah');
function jawadUsers(user) {
    console.log('hello ' + user);
    return 'jawad' + user
}

console.log("username=>", usernames);



// or variable function ka just nicha  bhi bansakhta ha 

function jawadUsers(user, user2) {
    console.log('hello ' + user + user2);
    return 'jawad' + user
}

var usernames = jawadUsers('abdullah');
console.log("username=>", usernames);





function jawadUsers(user, user2) {
    console.log('hello ' + user + user2);
    return 'jawad' + user
}

var usernames = jawadUsers('abdullah', "jawad");
console.log("username=>", usernames);





// function sum(physics , maths) {
//     console.log(physics , maths);
// }
// sum(50 , 48)


// ya muja sir sa puchna ha ka jub ma uper wala function ko or nichay wala function ko Go live kartha ho to dono ki value same hojati ha 


// function sum(physics , maths) {
//     console.log(physics + maths);
// }
// sum(50 , 48)



// jub hum koi variablae scop ka ander banata ha to wo kahlata ha local variablae or jub hum koi variablae scop ka bahar banata ha to wo kahlata ha global variablae 

// global wala local ma empliment ho sakta ha lakin local wala global ma empliment nahi ho sakta

var lastname = 'khan'

function greatUser() {
    var username = 'abdullah'
    console.log(username + lastname);
}

// console.log(username)
console.log(lastname)

greatUser()




var heading = document.querySelector(".head")
console.log(heading.innerHTML);



var headings = document.querySelector(".heads");

function vipuser() {
    console.log(headings.innerHTML);
    headings.innerHTML = "jawad jawad";
}

console.log(headings.innerHTML);




// if ka ander paihly line ma jo word = ka bad likha hota ha wo or else ka ander jo word = ka bad likha hota ha wo dono html ma same hona chahiya

// or khas tor pa if & else wala same hona chahiya

var heading = document.querySelector('.head')
function myIntro() {
    console.log(heading.innerHTML);
    // heading.innerHTML='jj'
    if (heading.innerHTML === 'jawad') {
        heading.innerHTML = "haseeb"
    } else {
        heading.innerHTML = 'jawad'
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


// array ki jo counting 0 sa shoru hoti ha or ya simple array ha

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
console.log(`${user[0]} ${user[2]}`);// is tarika sa hum 1 single console ma do array ka words dal sakta ha

console.log(user[3][0]);
console.log(user[4][1]);
console.log(user.length);
console.log(user[3]);
console.log(typeof (user));


user[0] = 'ammar';
user[4] = 'ali'
console.log(user[3])


// const clintses = [];
// clintses[0] = prompt('enter name1')
// clintses[1] = prompt('enter name2')
// // clintses[2] = prompt('enter name3')
// console.log(clintses);
// document.write(clintses);





//push
//pop
//unshift
//shift
//splice
//slice
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
//split {paragraph ko array ma krana ka liya,or paragraph ma convert corna ka lia bhi }
//join {Array ko paragraph ma krna ka liya yani join krna ka lia}
//includes{just bollien ma ya batana ka lia ka wo value array ma ha ya nahi}
//indexof{bs index number batana ka lia ka konsa word ka kia number ha}
//slice{start sa uradata ha bracket ma jitna digits dalo}
//reverse{array ko ulta krdata ha}
//sort{sequence ma lana ka lia ha}


let vegetable = 'bottle guard'

let fruit = `apple`;

let fruits = ['kala', 'Jawad', 'gora', 'ahmed', 'akhroot', fruit, vegetable]

console.log(fruits);




let array = ['akhter', 'jawad', 'ahmed-shapater', 'haseeb']

array.push(`ahmed`)//ya end ma word ko add kardata ha
array.pop()//ya end ma word ko mitadata ha
array.unshift(`jj`)//ya start ma word ko add kardata ha
array.shift()//ya start ma word ko mitadata  ha



// const fruitss = ['banana' , 'orange', 'mango'];
// fruits.push('watermelon');
// fruits.pop();
// fruits.unshift('watermelon')
// fruits.shift()
// console.log(fruitss);



let dryFruits = ['kala', 'ahmed', 'gora', 'jawad', 'akhroot', fruit, vegetable, 'watermelon', 'melon', 'mangoes', 'guava', 'nashpati', 'grapes', 'anaaar', 'kinno']

// console.log(dryFruits);

// fruits.splice('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa') third wala optioonal ha


// dryFruits.splice(2, 1, 'stawberry')
// console.log(dryFruits);

// dryFruits.splice(1 , 3);
// console.log(dryFruits);


// dryFruits.splice(6 , 2 , 'banana');
// dryFruits[3].pop()
// console.log(dryFruits)

// console.log(dryFruits);



const newArray = dryFruits.slice(3)//start sa uradata ha bracket ma jitna digits dalo
console.log(newArray);









// const namess = 'Muhammad Abdullah khan';
// //const arr = namess.split(' ')
// const arr = namess.split('')
// console.log(arr);












const names = ['Muhammad' , 'Abdullah' , 'Khan'];
// const star = names.join(' ')
const star = names.join(' j   ')
console.log(star);





let fruitss = [`strawberry` , 'apple', 'orange', 'banana'];
fruitss.sort((a,b)=>{
  // return (b>a)-(b<a)
  return (a>b)-(a<b)
})
console.log(fruitss);


let aray = [6,3,5,1,2]
aray.sort((a,b)=>{
    ////return b-a
    return a-b
})
console.log(aray);

const Fruits = ['banana', 'orange', 'mango'];
let input = document.querySelector('#shop')
let remarks = document.querySelector('.head')

function pushme() {
    if (Fruits.includes(input.value)) {
        console.log('Item Available');
        remarks.innerHTML = `${input.value} are available`;
    } else {
        console.log(`item not available`);
        remarks.innerHTML = `${input.value} are not available`
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



// for (let i = 1; i <= 5; i++) {
//     console.log('outer Loop ===> ' , i);
//     for(let j = 1; j <= 5; j++){
//         console.log('inner Loop===>' , j);
//     }
// }



// for (let i = 0; i <= 10; i++) {
//     console.log(`${i * 1} ka table`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }




// const userInput = +prompt('enter table number')
// const times = +prompt('How many time do you want?')

// for (let i = 1; i <= times; i++) {
//     console.log(`${userInput} X ${i} = ${userInput*i}`);
// }








// let frut = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];

// console.log(frut);
// const ul = document.querySelector('ul');
// for (let i = 0; i < frut.length; i++) {
//     // console.log(frut[i]);
//     ul.innerHTML += `<li>${frut[i]}</li>`
// }






