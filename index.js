 
// // 1.   Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3,9,23,64,2,8,28,93];

// a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array
//  93 - 3 = 90.
var lastElement = ages[ages.length-1];// in lenght there are 8 - 1, index 7 = 93
var firstElement = ages[ages.length-ages.length]; // 8-8 = index 0 = 3
var diff = lastElement - firstElement; // 93-7

console.log('Difference bewteen last and first element is: ',diff);

// b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths

ages.push(10);// .push adds new elment to end of array. 

console.log ('Differnce bewteen last and first element is:',ages[ages.length-1] - ages[0]); 
 
//  c. Use a loop to iterate through the array and CALCULATE the average age. Print result to console. 
// 240/9 = 26.666
var sum = 0;
for(i=0; i < ages.length;i++){ // for loop that goes through the array. 
    sum = sum + ages[i]; // 
    }
console.log('The average age is:',sum/ages.length);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names =['Sam','Tommy','Tim','Sally','Buck','Bob'];

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// 23/6

var sum = 0;

for(i=0;i<names.length;i++){
     sum = sum + names[i].length;  // .length in a string will return number of characters.
} 
console.log(sum/names.length);

//b. use a loop to interate throught the arrray again and concatenate all names togther, separated by spaces and print the result to console. 

var con = names[0];

for (i=1; i < names.length;i++){
con = con.concat(" ",names[i]);
}
console.log('All names together:',con);

//3.	How do you access the last element of any array?
//  If you know how many item in an array than you can name[5], if you dont know how many you can do const lastItem = names[names.length-1]

// 4. How do you access the first element of any array?
// If you know how many item in an array than you can name[0], or you can do const firstItem = names[names.length-names.length]

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [];

for(i=0; i <names.length; i++){
nameLengths[i]= names[i].length;    
}
console.log('Length of each name in the nameLengths array:',nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console

sum = 0;

for(i=0; i<nameLengths;i++){
    sum=sum + nameLengths[i];
}
console.log('Sum of all elements in the nameLengths array:',sum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function takesTwo(word, n){
    var con = word;
    for(i=1;i<=n;i++){
     con = con.concat(word);
    }
    return con;

}
console.log('Concatenated words:',takesTwo('Hello',3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName,lastName){
return firstName.concat(" ",lastName);
}
console.log("Full Name:",fullName('John','Smith'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isTotalGreaterThan100(arr){
    sum = 0;
    for(i=0;i<arr.lenth;i++){
        sum = sum + arr[i];
    }
    if(sum>100){
        return true;
    }else{
        return false;
    }
}
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array

function averageOfArrays(arr){
    sum = 0;
    for(i=0; i<arr.lenth;i++){
        sum = sum + arr[i];
    }
    return (sum/arr.length);
}

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

function compareAverage(arr1,arr2){
    if(average(arr1)>average(arr2)){
        return true;
    }else{
        return false;
    }
}


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
if((isHotOutside)&&(moneyInPocket> 10.50)){
    return true;
}else{
    return false;
}
}
var hotOutside = true;
var moneyInPocket = 300;

console.log("I'm thristy, can I buy a drink?:",willBuyDrink(hotOutside,moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it

function willTakeCodingClass(isCodingInDemand,moneyInBankAccount){
    if((isCodingInDemand)&&(moneyinBankAccount>2999.99)){
        return true;
    }else{
        return false;
    }
}
var codingInDemand = true;
var moneyinBankAccount = 5000;

console.log("I will be taking coding course:",willTakeCodingClass(codingInDemand,moneyInPocket));

// The function evalutes to see if both statements are true or false.  
// Created function to determine if there is enought money to take coding course if career is in demand. 






