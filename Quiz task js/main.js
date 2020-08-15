function checked(){
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4").name="q4";
var question5 = document.getElementById("q5").name="q5";
var question6 = document.getElementById("q6").name="q6";

var grade=0;

if(question1=="Cairo"||"CAIRO"||"cairo"){
    grade++;
}
if(question2=="4"||"FOUR"||"four"||"Four"){
    grade++;
}
if(question3=="Yellow"||"yellow"||"YELLOW"||"ORANGE"||"Orange"||"orange"){
    grade++;
}
if(question4=="twelve"){
    grade++;
}
if(question5=="fb"){
    grade++;
}
if(question6=="pizza"){
    grade++;
}

document.getElementById("grade").innerHTML="You Have Got"+ grade + "Out Of 6";

}