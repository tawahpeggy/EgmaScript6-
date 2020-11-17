console.log('hi peggy javascript has been added to me i can now talk');
var firstName = 'peggy';
var lastName = 'Nico';
console.log(firstName + lastName);
//*****************variables*****************
//variable without datatype
var person;
//declaring multiple variables in one statement
var peggy, tewah, che, nico;
//asign value to a variable
var firstName = 'cynthia';
console.log(firstName);
//defining variables in one statement and assigning them values
var firstName = 'cynthia', lastName = 'Alfred', middleName = 'Saker';
console.log(firstName + lastName + middleName);
//defining a variable without using the var keyword
column = 'arose';
console.log(column);

//**************////**datatypes**////*****************
//single quotes string
var portfolio = 'peggy is my name and the grace of God is upon me';
//double quotes string
var portfolio = "peggy is my name and the grace of God is upon me";
//string with quotes
learning = 'learning is never easy"but we must keep pushing"'
//boolean
var isLoading = false;
//Number
Amount = 12345;
//number with decimals
cost = 1233345456.765;
//undefined
var d;
console.log(d);
//null
var m = null;
console.log(m)
//comparison operators
var a = '5';
var b = 5;
console.log(a * b);
//type coersion 
//here a value can be converted to another type during run time
var a = 5 + 10;
//here the number is converted to a string bc of the plus sign.
var a = '5' + 10;
//type casting
console.log(a);
var b = 'Hi ' + ' am ' + ' peggy ' + 'see u next time'
console.log(b);
//here the string is converted to a number bc of the multiplication sign.
var a = '450' * 5;
console.log(a);
//here the 1st +sign will be mathematical and the next will type cast.  
var b = 450 + 123 + 'peggy';
console.log(b);
// here every thing will be converted to a string.
var c = ' peggy ' + 450 + 123;
console.log(c);
//conditional statements
// 1. if else statement
var myChild = 'alexander';
var sex = 'male';
if (sex === 'male') {
    console.log(myChild + ' is ' + sex);

}
else {
    console.log(myChild + ' is ' + sex);

}
//comments
/*This is a javascript comment 
multiple line comment*/
//this is a javascript single line multiple comment.
// if else if statements
var profession = 'engineer'

if (profession === 'software Engineer') {
    console.log('i solve the worlds problems with a single laptop');
}
else if (profession === 'developer') {
    console.log('i solve the worlds problems just by typing')
}
else if (profession === 'technical writter') {
    console.log('writing is in my blood');
}
else {
    console.log('i dont have a profession');
}
//******************////**logical operators**////******************
//And operator
if (4 === 4 && 5 === 5) {
    console.log('condition is true');
}
else {
    console.log('names do not match');
};
//OR operator
if (4 === 4 && 5 === 5) {
    console.log('condition is true');
}
else {
    console.log('names do not match');
};
// coding challenge 1
// 1. create variables for john and nick score and give them 80 and 45 as values respectively
var johnScore = 80;
var nickScore = 45;
//create variable for the lowest exam limit and give a value of 51
var examLowerLimit = 51;
//test if john amd nick both passed
if (johnScore >= examLowerLimit && nickScore >= examLowerLimit) {
    console.log('congratulations you all passed');
}
else {
    console.log('sorry not all of you passed');
}
if (johnScore >= examLowerLimit) {
    console.log('congrates john you passed')
}
else if (nickScore >= examLowerLimit) {
    console.log('congrates nick you passed');
}
else {
    console.log('sorry you both didnt passed');
}
if (johnScore >= examLowerLimit) {
    console.log('congrates john your score is ' + johnScore);
}
else if (nickScore >= examLowerLimit) {
    console.log('congrates nick your score is' + nickScore);

}
if (johnScore >= examLowerLimit && nickScore >= examLowerLimit) {
    console.log('congrates you both passed');
}
else if (johnScore >= examLowerLimit && nickScore < examLowerLimit) {
    console.log('congrates john you have passed');
}
else if (johnScore < examLowerLimit && nickScore >= examLowerLimit) {
    console.log('congrates nick you have passed');
}
else {
    console.log('hmmmm what dump students you! are! no one passed');
}
//************************functions***************** 
//function statements
function universityRush() {
    //code section
    console.log('hello world!')
}
universityRush();
/*function challenge : write a function to test if a student can enter a university or a college */
//function statement
function schoolTest(name, score) {
    var uniScore = 71;
    colScore = 51;
    if (score >= uniScore) {
        console.log(name + ' has been able to enroll into the university with ' + score + ' points ')
    }
    else if (score >= colScore) {
        console.log(name + ' has been able to enroll into college with ' + score + ' points ')

    }
    else {
        console.log('name sorry you failed with ' + score + ' points ')
    }
}
function totalScore(quizScore, essayScore) {
    score = quizScore + essayScore
    return score;
}
//schoolTest (prompt('input your name'),  totalScore (prompt('input your quiz score'),40 ));
//same function reused to test multiple students grade
// schoolTest(
// prompt('input your name'),prompt('input your score')
// );
// schoolTest(
// prompt('input your name'),prompt('input your score'));
//function expression
function add(a, b) {
    console.log(a + b);
    return a + b;
}
//add(prompt('input a'),prompt('input b'));

//*******************Arrays*******************
//declaring an array comprising of different datatypes
var arrayList = ['peggy', 'Anizet', 'Bih', true, 100, [1, true, 'sonia']
    , name = "peggy", level = "final year Fet", age = "23"
    
];
console.log(arrayList);
//accessing a value in an array.
//you do [index number and notice arraylist begins from 0 and not 1]
console.log(arrayList[0]);
//accesing an array in an array
console.log(arrayList[5][2]);

//writing a function inside an array
var arrayWithFunction = ['peg',  'Anizet', 'Bih', true, 100, [1, true, 'sonia']
    , name = "peggy", level = "final year Fet", age = "23",
    function (name){

        return ' hello ' + name //the spaces between the hello quotes will give it a space.

    }
];
//here the value of index 0 is passed as a parameter to the value of index 9 which is a function.
console.log(arrayWithFunction[9]  (arrayList[0]))
//changing values dynamically in arrays
var colors=['red','green','blue']
colors[0]='orange';
console.log(colors);
//push method
//it adds an element at the end of an arrayList.
colors.push('grey');
console.log(colors);
//pop method is the reverse of push it removes the last element from the array.
colors.pop();
console.log(colors);
//shft and unshift works exactly like pop and push respectively infront of the array
//shift method
colors.shift();
console.log(colors);
//unshift method
colors.unshift('black');
console.log(colors);
//indexof method
var black = colors.indexOf('black');
console.log(black);
// getting indexof without passing it in a variable
console.log(colors.indexOf('black'));
//indexof elements that dont exixts returns -1
console.log(colors.indexOf('pink'));
//indexof showingoff its strengths
if(colors.indexOf('pink')=== -1){
    colors.unshift('pink')
    console.log(colors);
}
else
{console.log('sorry blue already exists')
}
//****************////**objects**////*******************
//using the NEW keyWord
var person=new Object();
           person.name='peggy';
           person.class='finalYear';
           person.age=22;
           console.log(person);
//using square brackets in the place of dots give same output.
           var son=new Object();
        son['name']='peggy';
           son['class']='finalYear';
           son['age']=22;
           console.log(son);

//using literal notation
var bookList={book1:"cahier",book2:"texte"[1,"pearl"],
daughter:{firstName:"nico",lastName:"che"}
}
console.log(bookList);






























