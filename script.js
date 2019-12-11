/////////////////////////
/////BMI CALCULATOR/////
///////////////////////
/*var nameMark, nameJohn, markWeight, johnWeight, markHeight, johnHeight, bmiJohn, bmiMark, greaterBmi;
nameMark = "Mark";
nameJohn="John";
markWeight=85;
johnWeight=77;
markHeight=1.84;
johnHeight=1.69;

bmiJohn = johnWeight / (johnHeight * 2);
bmiMark = markWeight / (markHeight * 2);
console.log("The BMI of " + nameJohn + " is: " + bmiJohn);
console.log("The BMI of " + nameMark + " is: " + bmiMark);

greaterBmi = bmiMark >= bmiJohn; 

console.log("Has " + nameMark + " greater BMI from " + nameJohn +  " ?"  + " The answer is: " + greaterBmi);

if (bmiMark > bmiJohn) {
    console.log("Mark\'s BMI is higher than John\'s")
} else {
    console.log("John\'s BMI is higher than Mark\'s")
}*/

///////////////////////////////////
//This is a test for if and Else if
///////////////////////////////////
/*var name =prompt("Please Enter the name");
var age = prompt("Enter the age of " + name) 

if (age <= 13) {
    console.log(name + " is a child!")
}
else if (age > 13 && age < 20) {
    console.log(name + " is a teenager!")
}
else if (age >= 20 && age < 30) {
    console.log(name + " is a young man!")
}
if (age > 100) {
    console.log( " ERROR - Sorry," + name + " is probably dead :P")
}
else if (age > 30 && age <=99) {
    console.log(name + " is an adult!") } */

    //////////////////////////////////
    //////Challenge 2 - basketball teams calculator////// 
    /////////////////////////////

var nameJohn, nameMike,nameMary, teamMary, matchMary1, matchMary2, matchMary3, averagePointsMary, teamJohn, teamMike, avgPoints, matchJohn1, matchJohn2, matchJohn3, matchMike1, matchMike2, matchMike3, averagePointsJohn, averagePointsMike
nameJohn = " John";
nameMike = " Mike";
teamJohn = " John\'s Team ";
teamMike = " Mike\'s Team ";
teamMary = " Mary\'s Team "; 
matchJohn1 = 100;
matchJohn2 = 100;
matchJohn3 = 100;
matchMike1 = 100;
matchMike2 = 100;
matchMike3 = 100; 
matchMary1 = 100;
matchMary2 = 100;
matchMary3 = 100;

averagePointsJohn = (matchJohn1 + matchJohn2 + matchJohn3) / 3 ;
console.log(averagePointsJohn)
averagePointsMike = (matchMike1 + matchMike2 + matchMike3) / 3 ;
console.log(averagePointsMike)
averagePointsMary = (matchMary1 + matchMary2 + matchMary3) / 3 ;
console.log(averagePointsMary)

if (averagePointsJohn > averagePointsMike && averagePointsJohn > averagePointsMary ) {
    console.log(teamJohn + " has scored more points than " + teamMike + " and " + teamMary)
}
else if (averagePointsJohn == averagePointsMike && averagePointsMary == averagePointsMike) {
    console.log(teamMike + " and " + teamJohn + "and" + teamMary + " share the top, it is draw")
}
else if (averagePointsMary > averagePointsJohn && averagePointsMary > averagePointsMike) {
    console.log(teamMary + "Has scored more points that the others!")
}
else {
    console.log(teamMike + "scored more points than " + nameJohn + nameMike)
}

