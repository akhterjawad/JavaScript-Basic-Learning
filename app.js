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
jawad.innerHTML= "java"
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
    }  else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML ='total marks: '+400+"<br>"+ 'Obtained Marks: ' + ObtainMarks + '<br>' +
        'Percentage: ' + percentage.toFixed(2) + '%<br>' +
        'Grade: ' + grade;
}







