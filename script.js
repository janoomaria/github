//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var fridaKahloScore = 0;
var gretaThunbergScore = 0;
var malalaScore = 0;
var mayaAngelouScore = 0;






//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", fridaKahlo);
q1a2.addEventListener("click", mayaAngelou);
q1a3.addEventListener("click", malala);
q1a4.addEventListener("click", gretaThunberg);

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", mayaAngelou);
q2a2.addEventListener("click", malala);
q2a3.addEventListener("click", gretaThunberg);
q2a4.addEventListener("click", fridaKahlo);

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");


q3a1.addEventListener("click", malala);
q3a2.addEventListener("click", fridaKahlo);
q3a3.addEventListener("click", mayaAngelou);
q3a4.addEventListener("click", gretaThunberg);

var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var restart = document.getElementById("restart");
//#TODO: Add Event Listeners to your answer choice variables.


  


//#TODO: Define quiz functions here
function mayaAngelou(){
  mayaAngelouScore += 1
  questionCount += 1 
  if (questionCount >= 3){
    updateResult();
  }
}

function malala(){
  malalaScore += 1
  questionCount +=1
  if (questionCount >= 3){
    updateResult();
  }
}

function gretaThunberg(){
  gretaThunbergScore +=1
  questionCount +=1
  if (questionCount >= 3){
    updateResult();
  }
}

function fridaKahlo() {
  fridaKahloScore +=1
  questionCount +=1
  if (questionCount >= 3){
    updateResult();
  }
}

// Display Results

var result = document.getElementById("result");

function updateResult() {
  if(mayaAngelouScore >=2){
    result.innerHTML = "Maya Angelou: You persevere through all of lifes hardships and inspire everyone around you, who consistently fights for social & racial justice!";
    result2.innerHTML = 
      "<img src='https://cdn.glitch.com/dec0ecbd-756a-486e-83dc-65de568a1bf1%2Fdownload.jpg?1597992571628'>";
  } else if(malalaScore >=2) {
    result.innerHTML = "Malala Yousafzai: You firmly believe in education for all and exemplify that women are capable of anything!";
    result2.innerHTML = 
      "<img src='https://cdn.glitch.com/dfc4da08-e629-4816-9c0f-2dc38ed07355%2Fthumbnails%2Fhttp___com.ft.imagepublish.prod.s3.amazonaws.webp?1597988422798'>";
  } else if (gretaThunbergScore >=2){
    result.innerHTML = "Greta Thunberg: You are an activist for climate change and love to be a leader-- setting a GREAT example for your peers!"
    result2.innerHTML = 
      "<img src='https://cdn.glitch.com/dec0ecbd-756a-486e-83dc-65de568a1bf1%2Fdownload-1.jpg?1597992795285'>";
  } else if (fridaKahloScore >=2){
    result.innerHTML = "Frida Kahlo: Your favorite hobby is to create art of all sorts and strongly believe in equality for all";
    result2.innerHTML = 
      "<img src='https://cdn.glitch.com/dec0ecbd-756a-486e-83dc-65de568a1bf1%2Fdownload-2.jpg?1597992878476'>";
  }else {
    result.innerHTML = "You are a mix of Malala Yousafzai, Maya Angelou, Greta Thunberg & Frida Kahlo ";
  }
}

//Restart Button
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);


function restartQuiz() {
  result.innerHTML = "You represent...";
  result2.innerHTML = "<img src=''>";
  questionCount = 0;
  mayaAngelouScore = 0;
  malalaScore = 0;
  gretaThunbergScore = 0;
  fridaKahloScore = 0;
  enableQuestions();
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}