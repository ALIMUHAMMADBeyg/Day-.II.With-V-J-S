alert('Hello Javasscript');
//var, let, and const
//var: is used in es5
//const: used in es6 and cannot be reassign value to constant
//let: used in es6 and you can assigned value to to defined variable.
let hello;
console.log(hello);
hello = 'HI';
console.log(hello);

//var is used before es6
//var 

var shoes = 'nike';
console.log(shoes); 
//we can reassign value to var
shoes = 'addidas';

//let is a bit same as var

//let greetings;
//console.log(greetings);
//greetings = 'Hi W';
//console.log(greetings);

//const is a bit different from var and let
//if a value is once assigned then it canr be assigned again
//const is constant
//have to give a value; 
//can change value of const but cant reassign value

const optiz = 'checkuser';
console.log(optiz);

// alert(Hello);
var seeds = 'golden';
console.log(seeds);

//we can change the values but cant reassign value


//now objects 

const person = {
    name: 'John',
    age: '30',
}
//we can mutate this person to sara
//console.log object
//console.log object literal
//and objects can have more than one key value pair
person.name = 'sara';
person.age = '32';
console.log(person);



//same thing with arrays

const numbers = [1,2,3,4,5,6];
//its a method to add an array
numbers.push(7);
console.log(numbers);


//IN JAvaScript there are two main datatypes;
//Primitive DataTypes and Non PrimitiveDataTypes;


//Primitive DataTypes Vs Non PrimitiveDataTypes;


//Primitive Data Types

//Stored Directly in Location 
//the variable acceses stored on the stack


//reference Data Types
//Accesed by reference
//Objects that are stored on the heap 
//a pointer to a location in memory

//In javascript there are 6 primitive datatypes;
//1.string
//2.Number
//3.boolean
//4.Null
//5.undefined
//6.symbols(es6)

//1,Strings:
           //which are sequences of characters they can be letters numbers symbols


//2,Number:
           //We have the number type which is just that the number
           //now its important to know that integers , decimals , floats these  are all considered numbers in j.s;


//3,Boolean:
            //we also have the boolean type  which is True or False;

//4,Null:
        //which is intentional empty value;

//5,undefined:
              //variable that has not assigned a value;
        
//6,symbols(es6);
                 //a bit complicated as he say $is a symbol




//Referance data Types/Objects:
//1.Arrays
//2.Object Literals
//3.Functions
//4.Dates
//5.AnythingElse.....

//javascript is dynamically typed language;
//data types are associated with actual values and not the variables themselves;
//the same variable can hold multiple types;
//there are supersets of js and addons to allow static typing (typescript,Flow);


//primitive datatypes;

//1.string;
const name22 = 'john doe';
console.log(typeof name22);

//string 
// A string in javascript must be suurounded by quotes
let str = 'Hello';
let rts = "Hey";
let trs = `can be embed another ${str}`;
//Backticks are “extended functionality” quotes.
// They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name19 = "johnathon";
//embed a variable
alert(`Hello, ${name19}!` ); //Hello johnathon!
//embed an expression
alert(`the result is ${1+2}`); //the result is 3

//2.number
const age = 45;
console.log(typeof age);
//3.boolean
const haskids = true;
console.log(typeof haskids);
//4.Null
const car = null;
console.log(typeof car);
//this will show object in the console but this is not a object 
//this is kind of a bug in javascript..

//5.undefined
let test;
console.log(typeof test);

//6.symbol 
//is part of es6
//sumbol is a new primitive type
const sym = Symbol();
console.log(typeof sym);

//for null returns object but its a language error its not actuallay an object;


//object


//so these are all primitive types in javascript

//string again practice
const noname = 'jojo';
console.log(typeof noname);
//once again
const sneakers = 'shoes';
console.log(typeof sneakers);

//again a string

var whiteshark = 'Fish';
console.log(whiteshark);


//Refrence types objects
//we will start with an array


//array 

const hobbies = ['movies' , 'music' , 'programming'];
console.log(typeof hobbies);
//this will return as object in console.log

//now lets do object literals
//object literals
 const address = {
    city: 'Boston',
    state: 'Ma'
 }
 console.log(typeof address);


 const country = {
    pad: 'jonsberg',
    imac: 'california'
 } 
 console.log(typeof country);


//last thing is the date 
//and we set it to the date constructor

const today = new Date();
console.log(today);
console.log(typeof today);


//Type conversion in javascript 
//changing data type 


// first is number to string 

let val;
//Number to string 
val = String(7+7);
//output
console.log(val);
console.log(typeof val);
console.log(val.length);

//bool to string 
let bool;
bool = String(true);
//output console
console.log(bool);
console.log(typeof bool);


//Date to string
let nd;
nd = String(new Date())
//this is now  a string its not a date object

console.log(nd);
console.log(typeof nd);



//Array to string

let numbs = ([1,2,3,445])
console.log(numbs);
console.log(typeof numbs);


//tostring method()
bal = (5).toString();
bal = (true).toString();

console.log(bal);
console.log(typeof bal);


//string to number
//parseInt 
nt = Number('3');
console.log(nt);
console.log(typeof nt);
console.log(nt.toFixed());


//parseInt fuction converts its first argumrnt to string p
//parses that string than an integer or nan;

jet = parseInt('100.30');
jet = parseFloat('100.30');
console.log(jet);
console.log(typeof jet);


//type cohersion
//if 6 is converted to a string 
const val1 = String(6);
const val2 = 7;
const sum = val1 + val2;
console.log(sum);

//output will be 67

//this is an exmple of type cohersion



//Number and the math object 


const num1 = 100;
const num2 = 33;
let vaz;

//simple math with numbers 
vaz = num1 + num2;
vaz = num1 * num2;
vaz = num1 - num2;
vaz = num1 % num2;

//math object
vaz = Math.PI;
//reuturns the value of pi

vaz = Math.E;
//returns the eulers constant


vaz = Math.round(2.9);
//it will round 2.9 to 3 it basically rounds off the number 


vaz = Math.ceil(9.333);
//this is gona round up 9.333 to 10 this basically rounds up the number


vaz = Math.floor(2.33);
//this is gona round down 2.33 to 2 so it bascically rounds down the value;


vaz = Math.sqrt(64);
//it basically gona get a square of 44 which will be 8

vaz = Math.abs(-33);
//this will return -33 to 33 change it to absolute number


vaz = Math.pow(8,2);
//this will return the power 64

vaz = Math.min(22,33,445,6,77);
//this will return the minimum or the smallest number which is 6


vaz = Math.max(99,77,33,1,3,7,9)
//this going to return the maximum number or the greatest number which is 99


vaz = Math.random();
//it will return random decimal number 

vaz = Math.floor(Math.random() * 20 +1);
// now it will return a random number between 1 and 20;

console.log(vaz);


//string method and concatination

const firstName = 'Williams';
const lastname = 'jonathen';

let wj;

wj = firstName + lastname;

//concatenation  which is used to give space between two terms like between willams and jonathen;

wj = firstName + ' ' + lastname;

console.log(wj);

//this will return as williams jonathen giving space between the first name and the last name;


//Append method 

vamp = 'zek ';//space between the two names comes from here
vamp += 'trson';
console.log(vamp);
 
vamp = 'Hi My Name is ' + firstName + ' and I am ' +age; 
console.log(vamp);

//this how concatenation works


//Escaping 
const carbanak = "That'\s Awesome I can\'t wait";
console.log(carbanak);
wj = firstName.length;


//concat()
const spider1 = 'li';
const spider2 = 'ilo'
let jjio;
jjio = spider1 + spider2;

jjio = spider1.concat(' ', spider2);
console.log(jjio);
//change case 

//upper case
//upper case is used to convert the text or string into upper case
wj = firstName.toUpperCase();
//lower case
//lower case is used to convert text or string into lower case
wj = firstName.toLowerCase();
//if we want a certain character of a string
wj = firstName[0]
console.log(wj);

//indexof()
//indexof() method is used to find a  index of a value or a character 
//used to get characters

const idom1 = 'fneme';
const idom2 = 'lneme';
let mer;
mer = 'fneme' + 'lneme';

mer = idom1.indexOf('m');
console.log(mer);

//last indexof()
const fnom = 'zahid';
const lnom = 'farooq';
//let = ideomix;

ideomix = 'zahid' + 'farooq';

ideomix = fnom.lastIndexOf('i');
console.log(ideomix);


//charat 
//char at method returns the characters at the specified index in a string
 const yushi = 'criz';
 const anime = 'atr';
 let mzc;
 mzc = 'criz' + 'atr';
 mzc = yushi.charAt('2');
 console.log(mzc);

//let say we want to get the last charcter of a string
//and a string could change 
//so u need some kind  of a formula 

//get last character 
const yudo = 'jklop';
const hatred = 'light';
let hhiol;
hhiol = 'jklop' + 'light';
hhiol = yudo.charAt(yudo.length -1);
console.log(hhiol);


//substring()
//pull astring out of a string
//used to pull out the numbers of characters we want from a string

const jacobs = 'harri';
const shit = 'vibes';
let jep;
jep = 'harri' + 'vibes';
jep = jacobs.substring(0,4);
console.log(jep);



//slice ()
// used to pull things out 
//mostly used with array to pull thing out of arrays 
//slice is very similar to substring;
//we can also used as in some situation like in the retuning the value from the back in -
const developedcountry = 'japan';
const toodevelopedcountry = 'china';
let taiwan;
taiwan = 'japan' + 'china';
taiwan = developedcountry.slice(0,3);
console.log(taiwan);


//when we need the last characters of any string then we will use 

const udemy = 'course';
const crash = 'fundamentals';
let stifend;
stifend = 'crash' + 'fundamentals';
stifend = udemy.slice(-3);
console.log(stifend);


//split()
//what this can do is split into an array based on a seprator;
const elitebook99 = 'can you just fish off from here dude plz';
const bekt77 = 'for good sake';
let rto22;
rtoer22 = 'can you just fish off from here dude' + 'for good sake';
rtoer22 = elitebook99.split(' ');
console.log(rtoer22);


//split is used to seprate the string or an array 


const programs = 'web design,ui/ux,programming';
const progr2 = 'animation,digital markiting';
let tactice;
tactice = 'web design, ui/ux, programming,' + 'animation,digital markiting';
tactice = tactice.split(',');
console.log(tactice);

//replace()
//this will replace vanilla with chcolate and return chococlate
const cream = 'chocolate';
const ice = 'vanila';
let iol;
//iol = 'chocolate' + 'vanila';
iol = ice.replace('vanila' , 'chocolate');
console.log(iol);




let flavour = prompt("which flavour ice cream?' ' ");
alert(flavour);

 BikeType = prompt("which Type Of Bike You Need?''" );
alert('cool you will soon get one Inshallah');
    //'Great You Will Get One Soon Inshallah');
let virus = prompt("cococrina?''");
alert(virus);

let ShukarAllhamdulliahHiRabilallameen = prompt("Fabi aikal rabikuma Tukaziban ' '");
alert('ShukarAllhamdulliah Hi Rabil allameen');


//const thanks = 'alhamdullah';
//const fish = 'halal';
//let learning;
//learning = 'alhamdullah ' + 'halal';
learning = prompt("learning?' '");
alert('alhamdullah ' + 'Halal');

thanksgiving = prompt("Are You Satisfied ''");
alert('Allhamdulliah hi rabbil allhamin');

//the repalce method
//replace()
//this will return dal replaceing rpti
const hoye = 'daal';
const del = 'roti';
let sabzi;
sabzi = 'dal' , 'roti';
sabzi = sabzi.replace(hoye);
console.log(sabzi);


//so this repalce method works its used to repalce a string or a value

//slice method once more
const oncemoe = 'again';
const means = 'daa';
let yusd;
yusd = 'again' + 'daa';
yusd = yusd.slice(0,9);
console.log(yusd);

//includes
//which gives true or false value based on if something is in the string
//this will retun true because weer is included but if something isn,t includede it will return as false 
 const peakboo = 'welf';
 const jordsn = 'weer';
 let yuiog;
 yuiog = 'welf' + 'weer';
 yuiog = yuiog.includes('weer');
 console.log(yuiog);


alert('Coding is Cool');




// this all is just to get feet wet 
//more exiciting is yet to come
//fundamentals of javascritpt


//tempalte literals 
//template strings


const namedev = 'alice';
const job = 'software eng';
const cantry = 'japan';
const agge = '19';
let altog;
//without template strings (es5)
//this is the old way
//this is not the cool way
altog =

altog = '<ul>' +
        '<li>Nameedev: ' + namedev +'</li>' +
        '</li><li>job: ' + job +'</li>'  +
        '<li>cantry: '+ cantry +'</li>' +
       '<li>agge: '+ agge +'</li></ul>' ;



function heyu(){
    return 'heyu';
}
//with template strings or literals (es6);
//same shit but ease ay brah
//used to concatenate strings
`<ul>
<li>namedev: ${namedev}</li>
<li>job: ${job}</li>p-==ntry:${cantry}</li>
<li>agge:${agge}</li>
<li>${heyu()}</li>
</ul>
`;
document.body.innerHTML = altog;
//cool dude this is better way with template literals 
//ease and short
learning33 = prompt("do russians hate americans? ' '" );
alert ('Hell Ya');

alert('sucks dude');
alert('one more day alive');
chezweth = prompt("someday just one day?' '");
alert('simple life no adventure');
// template literals are used to interpolate variables into strings;
//the method is called string interpolation;



//Now the array and array methods 
//arrays are very important paRT of any 
//programming languages
//thay allow us to store multiple values in one variable
//they can be mutated and iterated through 
//and they be used in some really complex algorithms
//creating and mutating arrays


//array and array method

//making some aaarays
const cars = ['volo','audi','mercedes'];
console.log(cars);
//another method of making arrays is to use the array constructor


//using the array object
const hala = new Array ('amazon','pentagon','shawn','babylon');
console.log(hala)
//both of these are ways to create an array

//array indexes start with zero

const planes = ['atr','jet','beoing 747','spac-z'];
console.log(planes);


const chatni = [29,'watermeo','mango',new Date()];
//document.body.innerHTML = chatni;
console.log(chatni);


//this is one the method to make an array 

//so now lets see hoe get an array length

//array length

//this will show how many values are there in an arraay
//get length
const samsins = ['santox','bulgaria','Bosnia','jewry'];
let grp;
grp = samsins.length;
console.log(samsins);



const nembars = [23,56,67,78,78,78,78];
const nambers = [1345,345,345234,5,46];

let vnb;
vnb = nembars.length;
console.log(nembars);
console.log(vnb);

//this will give us the value of numbers present in an array ;

//check array
//Now check an array
//check if is an array 

const yudemi = ['workingon','struggling','harshnetwoks'];
const pop = ['whatthe','whu','sabsert'];
const elt = ['junk','whtdf','somethinghehavewhichineed'];
let sesot;
sesot = Array.isArray(pop);
console.log(pop);
console.log(sesot);

//get a single value from an array
//to get a single value from an array using array index


const messycoed = ['mycod','yourcod','hiscode'];
const apolo = ['nasa','spacex','dmnproj'];
const dumysmell = ['whute','bhat','notorius'];
let hardtounderstanford;
hardtounderstanford = messycoed[2];
console.log(messycoed);
console.log(hardtounderstanford);
//this will return hiscode as number 2 becaude arrays are zero based;
//array starts from zero 
//thats why we got hiscode on 2 index rather than youcode becaud it starts from 0
//mycode is on 0 index and yourcode is on 1 index and hiscode is on 2 index
//arrays are zero based
//areys are mutable
//we can modify them

//Insert into an array

const messedup = ['thid','malaysia','thailnad'];
const coclor = ['boostup','oneday','areypo'];
let sjengineer;
messedup[1] = 'kuwait';
console.log(messedup);
console.log(sjengineer);

//Find index of a value 
//this will return the index value of virus which is 3 starting from 0 index
const centausus = ['islamabad','sialkot','peshawer','virus'];
const pakistan = ['spiderweb','notag','watson','pablo'];
let alsalf;
alsalf = centausus.indexOf('virus');
console.log(centausus);
console.log(alsalf);

//mutating  arrays 
// How add on the end of an array

//using the push method
//replacing end array or adding end array
const prediv = ['toothpas','waterfall','cameron','goodluck']
const invyce = ['software','nexttime','onfront','endback'];
let rupeeba;
rupeeba = prediv.push('goju');
console.log(prediv);
console.log(rupeeba);


//add to the front 
const whatthw = ['iknow','better','senior','experienced','pradice','perfection'];
let watsen;
watsen = whatthw.unshift('muchbetter');
console.log(whatthw);
console.log(watsen);

//const karo
//name do
//equal to array ya string baanaw
//then let 
//then let equal to
//then the applied mehtod
//then console the first variable
//then console the let 




//if we want to take off and array from end
//this will take ooff miniashi from the array
//take ooff from end
const ngasaki = ['heroshima','beiber','micheal','notoe','miniashi'];
ngasaki.pop();
console.log(ngasaki);
//console.log(fishermna);

//take off from front
//we use the shift method to take of the first array


const vadiabel = ['nocdoc','setfre','paypal','gramsta','whatsapp'];
//const wonders = ['dezen','tryu','wentfree','setreg'];
vadiabel.shift();
console.log(vadiabel);
//this will take off the first array nocdoc
//greatest challenge of life is discovering yourself
//the day you discover yourself you pass half of the challenges

const pakistan33 = ['base','kol','mzae','pablo','respect','iritation','irrigation','itiration'];
pakistan33.splice(1,3);
console.log(pakistan33);


//this will remove the arrays on 1to3 index



//we can also rever the array using the reverse method

//reverse 


const popcorn = ['whitecorn','browncorn','greencorn','sugarcorn','saltycorn'];
popcorn.reverse();
console.log(popcorn);


//in return this will reverse the combination of array 
//this will fall as whitepopcorn in the last and saltypopcorn first;



//this is mutating arrays 
//we can also concatenate arrays

//concatenate arrays 

const malamjabba = ['skiresor','skilift','wanderlifr','mudic','hawa','freshair'];
const bikesharing = ['firsteverride','ridesharingcompany','quicksharing','sharea bikr','rodeout'];
let shareit;
shareit = malamjabba + bikesharing;
shareit = bikesharing.concat(malamjabba);

console.log(malamjabba);
console.log(shareit);
//this will return as all the arrays into single array by merging then in single array


//another method is sorting
//this is used to sort the arrays into alphabetical order


//sorting array
const jjiop = ['hery','nipoli','neftez','mantac','syntaq'];
const uytf = ['iu','esd','waq','qa','dre'];
let tgsr;
tgsr = jjiop + uytf;
tgsr = jjiop.sort();
console.log(jjiop);
console.log(tgsr);
//this wiil sort out all the arrays alphabetically;

//"compare function"
//we use a call back function here to 
//to sort out the arrays

const lumber = [23,34,234,234,45,46,45,78,234,,5,56,7,78];
const lumber2 = [2323,2,23,23,23,23,2,3];
let dere;
dere = lumber + lumber2;
dere = lumber.sort(function(x,y){
    return x-y;
});
console.log(lumber)
//this will return as in sorting the numbers from smallest to largest;


//reverse sort
//rerverse sort function
//this results in largest to smallest numbers in an array
//it basically results in 
const testing = ['replit','vusual','studiocode','string','welen'];
const pecks = ['wanter','trem','tter']
let pakagejj;
pakagejj = testing + pecks;
pakagejj = testing.sort(function(y,x){
    return y-x;
});
console.log(testing);
//this will result in reversing the arrays from smallest to largest numbers.....






//This starts from here and


/*

The JavaScript languageData types
December 6, 2022
Array methods
Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

Add/remove items
We already know methods that add and remove items from the beginning or the end:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
Here are a few others.

splice
How to delete an element from the array?

The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

So, special methods should be used.

The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:

arr.splice(start[, deleteCount, elem1, ..., elemN])
It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

This method is easy to grasp by examples.

Let’s start with the deletion:

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]
Easy, right? Starting from the index 1 it removed 1 element.

In the next example we remove 3 elements and replace them with the other two:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
Here we can see that splice returns the array of removed elements:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements
The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
Negative indexes allowed
Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
slice
The method arr.slice is much simpler than similar-looking arr.splice.

The syntax is:

arr.slice([start], [end])
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

For instance:

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

concat
The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

arr.concat(arg1, arg2...)
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
…But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
Iterate: forEach
The arr.forEach method allows to run a function for every element of the array.

The syntax:

arr.forEach(function(item, index, array) {
  // ... do something with item
});
For instance, this shows each element of the array:

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
And this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
The result of the function (if it returns any) is thrown away and ignored.

Searching in array
Now let’s cover methods that search in an array.

indexOf/lastIndexOf and includes
The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

For instance:

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred.

The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
The includes method handles NaN correctly
A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

find and findIndex/findLastIndex
Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.

The syntax is:

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
The function is called for elements of the array, one after another:

item is the element.
index is its index.
array is the array itself.
If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
In real life arrays of objects is a common thing, so the find method is very useful.

Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

Here’s an example:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3
filter
The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
For instance:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
Transform an array
Let’s move on to methods that transform and reorder an array.

map
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
sort(fn)
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

For instance:

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

To use our own sorting order, we need to supply a function as the argument of arr.sort().

The function should compare two arbitrary values and return:

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
For instance, to sort as numbers:

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
Now it works as intended.

Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.

By the way, if we ever want to know which elements are compared – nothing prevents from alerting them:

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.

A comparison function may return any number
Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.

That allows to write shorter functions:

let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15
Arrow functions for the best
Remember arrow functions? We can use them here for neater sorting:

arr.sort( (a, b) => a - b );
This works exactly the same as the longer version above.

Use localeCompare for strings
Remember strings comparison algorithm? It compares letters by their codes by default.

For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.

For example, let’s sort a few countries in German:

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
reverse
The method arr.reverse reverses the order of elements in arr.

For instance:

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
It also returns the array arr after the reversal.

split and join
Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

In the example below, we split by a comma followed by space:

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
Split into letters
The call to split(s) with an empty s would split the string into an array of letters:

let str = "test";

alert( str.split('') ); // t,e,s,t
The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

For instance:

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
reduce/reduceRight
When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

The syntax is:

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
The function is applied to all array elements one after another and “carries on” its result to the next call.

Arguments:

accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.
As function is applied, the result of the previous function call is passed to the next one as the first argument.

So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

Sounds complicated?

The easiest way to grasp that is by example.

Here we get a sum of an array in one line:

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
The function passed to reduce uses only 2 arguments, that’s typically enough.

Let’s see the details of what’s going on.

On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
On the second run, sum = 1, we add the second array element (2) to it and return.
On the 3rd run, sum = 3 and we add one more element to it, and so on…
The calculation flow:


Or in the form of a table, where each row represents a function call on the next array element:

sum	current	result
the first call	0	1	1
the second call	1	2	3
the third call	3	3	6
the fourth call	6	4	10
the fifth call	10	5	15
Here we can clearly see how the result of the previous call becomes the first argument of the next one.

We also can omit the initial value:

let arr = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);

alert( result ); // 15
The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

The calculation table is the same as above, minus the first row.

But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.

Here’s an example:

let arr = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);
So it’s advised to always specify the initial value.

The method arr.reduceRight does the same, but goes from right to left.

Array.isArray
Arrays do not form a separate language type. They are based on objects.

So typeof does not help to distinguish a plain object from an array:

alert(typeof {}); // object
alert(typeof []); // object (same)
…But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
Most methods support “thisArg”
Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

That parameter is not explained in the sections above, because it’s rarely used. But for completeness we have to cover it.

Here’s the full syntax of these methods:

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument
The value of thisArg parameter becomes this for func.

For example, here we use a method of army object as a filter, and thisArg passes the context:

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.

A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

Summary
A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array.

The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

We can use every to compare arrays:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

For the full list, see the manual.

From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that’s much easier.

Look through the cheat sheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.

Tasks
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.

Open a sandbox with tests.

solution
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
Open a sandbox with tests.

solution
Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
Open a sandbox with tests.

solution
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
solution
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
solution
Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
Open a sandbox with tests.

solution
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */
/*
alert( names ); // John, Pete, Mary
solution
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

solution
Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
solution
Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

solution
Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
solution
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  /* your code */
  /*
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
Open a sandbox with tests.

solution
Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.

Open a sandbox with tests.

solution
Commentsread this before commenting…
If you have suggestions what to improve - please submit a GitHub issue or a pull request instead of commenting.
If you can't understand something in the article – please elaborate.
To insert few words of code, use the <code> tag, for several lines – wrap them in <pre> tag, for more than 10 lines – use a sandbox (plnkr, jsbin, codepen…)


Chapter
Data types
Lesson navigation
Add/remove items
Iterate: forEach
Searching in array
Transform an array
Array.isArray
Most methods support “thisArg”
Summary
Tasks (13)
Comments
Share
Edit on GitHub
© 2007—2023  Ilya Kantor
about the project
contact</pre>
/*


*/


//Arrays and array methods
//arrays allow us to store multiple values in one variable
//they can be mutated and iterated through

//create some arrays
const umbers = [43,34,34,34,34,45,567,68,78,989,54,54];
//the second way of constructing array is by
//array constructor
const umbers2 = new Array(24,23,24,35,12,35,23,1,23,34);
//constructing an array of strings
const fruits12 = ['apple','mango','banana','watermelon','carrots'];
//constructing a array of mixed data type
const mixed = [23,'nope',true,undefined,null,{a:1,b:1}, new Date()]

let momomo;
momomo = umbers + umbers2 + mixed;
console.log(momomo);


//how to get array length 

//finding how many values are in the array
momomo = umbers.length;
console.log(umbers);
console.log(momomo);

const macnode = ['nastes','pioneer','wenkover','nersons','trasd'];
let nuvilla;
nuvilla = macnode;
nuvilla = macnode.length;
console.log(macnode);
console.log(nuvilla);


const pokemmon = ['narson','watson','markson','gameson'];
const lALIKJAN = ['ANger','insult','ragging','understanding'];
let berlin;
berlin = pokemmon + lALIKJAN;
//this will return gameson on array index 3 starting from zero
berlin = pokemmon[3];
//to check if is either array or not 
//we use the isarray method
//if is an array it will return as 
// true
// if not an array it will return as false
berlin = Array.isArray(pokemmon);
console.log(pokemmon);
console.log(berlin);


// if we want to insert something in an array
//inset in an aray
const babayagi = ['jonqick1','jonwick2','jonwik3','jonwik4'];
const dret = ['nerd','random guy','guywithglasses','sortedbro'];
let fridge;
fridge = babayagi + dret;
fridge = babayagi[1] = '300000';
console.log(babayagi);
//this will return as the 30000 on 1 index of the array



//next is the finding the value of index in an array
//value of array 

//using the indexof mehtod
const hellomoto = ['motorolla','vivi','remi','gog'];
const melton = ['asndbox','melsim','norfi','nectag'];
let mediocre;
mediocre = hellomoto.indexOf('vivi');
console.log(hellomoto);
console.log(mediocre);


//arrays and array helping methods
// array and array methods


//splice method
//splice is used to delete an element from an array
//the arrays are objects so we can try to use delete 
let arr99 = ['i','go','to','office'];
delete arr99[2];
alert(arr99.length);
console.log(arr99);
//this is  return i go office deleting array at index 2


const hyyu = ['i','will','be','there','soon'];
delete hyyu[4];
console.log(hyyu);


const tehran = ['hotn','cold','snow','sunny'];
delete tehran[3];
console.log(tehran);
console.log(tehran.length);


let warfare = ['nicetry','fortune','tarotcards','noidentity'];
delete warfare[3];
console.log(warfare);
console.log(warfare.length);

const wert = ['symon','chad','hhurly','stevechan','jawediqbal'];
delete wert[2]
console.log(wert);


let chinnese = ['good','struggling','hustling','vision','process'];
chinnese.splice(0,3);
console.log(chinnese);
//this will remove the elemets from 0 array index to 3 


let vvo = ['ef','ddf','rrt','ddt'];
delete vvo[3];
console.log(vvo);

//this will remove the element from 3 array index 


//by using the splice method we can add remove insert or replace elements;

//removing elements by using splice method
let movies = ['socialnetwork','accidentalmillionare','thesiliconvalley','techgiant','noonedares','somethinginnovative'];
movies.splice(4,5);
console.log(movies);
//this will remove the elements from array index 4 and 5

let korea = ['cia','mosad','kgb','fyi','fbi','nastec','techhub','siliconvalleygiant'];
korea.splice(1,3);
console.log(korea);


//this will remove the elements from array index 1 to 3
//and return the rest of the values



//again how to remove elements from array

const uconnect = ['jjui','piop','rlt','sar','soft','ware','hardware'];
uconnect.splice(0,3);
console.log(uconnect);

//once agaian removing elements from array using the splice mehthod

const hbo = ['channel','frequency','capital','transactions','thanksgiving','voicecommand','voice assiastant','ai tool'];
hbo.splice(0,4);
console.log(hbo);
//once again 
const lopi = ['appolo1','apoolo11','apoolo99','nasa22','elonmust','tesla'];
lopi.splice(0,2);
console.log(lopi);
//again using splice method to remove elements from arrays
let yukoshima = ['jon','michaela','food','drinks','chill','vacations','summers','holidays','restforwork'];
yukoshima.splice(0,3);
console.log(yukoshima);

//now using the splice mehtod to replace the array elements with another

const yokod = ['neflo','panadol','panadolcf','medicines','cure','serach','research','nephron'];
yokod.splice(1,3, 'newyork','helsinki');
console.log(yokod);

//again using the splice method to replace the elements froma n array

const swet = ['summers','warm','hot','climate','eson','season','nedrt','nerd','nfts'];
swet.splice(0,1,2,3,4, 'ethiopia','ethihas','emirates','ethihad','wrightbrothers');
console.log(swet);

//this will replace the elements from array index 0 1 2 and 4 with the new elements
let jui = ['junkfood','noadventure','justgoingon','withtheflow','whythisthingbro','workingwithgit','apis'];
jui.splice(1,2,3, 'replaced','using','splicemethod','zeroindex');
console.log(jui);

//this will replace the elements on array index 1,2,3 starting from array index zero

//once again replacing elements using the splice method

let swhouse = ['techzone','buildingsomethingnew','philanthropist','techhouse','givingjobs','isbetter','thandoingjobs','harvard'];
swhouse.splice(1,2,3, 'buildingaempire','strugglingforfuture','noonecanstandby');
console.log(swhouse);


const macmon = ['aroutine','timetable','journeytowardspath','pathtowardsjourney'];
macmon.splice(0,1,2,'ned','crag','code');
console.log(macmon);

let programmers = ['justing','mads','steven','clove','cover','james'];
programmers.splice(0,1,2,3, 'sleep','eat','code','repeat',);
console.log(programmers);
//this will repalce the elements on array index 0,1,2 and 3


let part = ['just','not','now','i','am','going','to','code','nextime','dude'];
part.splice(6,7,'for','projects');
console.log(part);

const productive = ['i','should','be','productive','rather','then','spending','qualitative','time','for ever'];
productive.splice(5,9,'then','spending','lesiure','time','over','cool','rr','df','eqrf');
console.log(productive);

//this will replace the elements on array index 
const lefy = ['icom','comsc','robotics','nexttime'];
lefy.splice(0,2,'It',"c.s");
console.log(lefy);
//this wil replace the eleements of the array on 0 to 2 index

//we can replce remove any element on an array index using the splice 
//using the splice method replacing the elements  from array
const vivo = ['nasa','tesla','spacex','whitebox','checkbox'];
vivo.splice(0,2,'ecma7','ecma8','ecma9',);
console.log(vivo);
//this will replace the elements on array index 0 to 2

//now again using the splice method to replace 
//the elements froma an array
let jode = ['i','am','studying','javascript','right','now'];
jode.splice(0,3,'lets','do','code');
console.log(jode);
//to replace a element from an array 
//there sshould be mentioned the starting arraay index to the next array index from where it finishes;


//like 
//replacing an 
//array using the splice method
let whito = ['red','green','blue','green','purple','golden'];
whito.splice(0,4,'nerd','mint','co.founder','next.guy');
console.log(whito);


//this will replace the the 4 elements in the upper array;
//and will replace them with the 4 elements below to the 4 index
//this how we can use the splice method to remove or replace any elements in an arrray

//the splice method is also used to insert any elements without the removal of any element
//inserting an element usng splice method
//with removing element from an array
let js = ['i','study','javascript','which'];
let removed = js.splice(4,5, 'is','complex','language');
console.log(js);
//here splice is used to add the removed elements in the array

//lets practice the 
//splice method to insert or add eleemtns in an array

let remote =['this','will','be','awesome','that'];
removed = remote.splice(5,16,'i','will','be ','a','software','engineeer','i','am','going','to','rok');
let length = remote.length;
console.log(remote);

//this will insert the elemetns from the below
//Nothing is IMpossibel
//the word itself says i am possible

///so far 
//i have learned 
//how to replace an elements using the splice
//and array methods
//for eaxmple

const noddles =['macroni','nud','nuggests'];
const nads = ['random','woders','sdf','sdf'];
let mart;
mart = noddles + nads;
mart = noddles.splice(1,2, 'nfts','chatbots','noddles');
console.log(mart);























