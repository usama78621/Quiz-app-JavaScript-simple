const quiaDate = [
    {
        qusetion:"What is full JS Form?",
        a:'javaScript',
        b:'javaSome',
        c:'javaTool',
        d:'javaGame',
        anw:'a',
    },
    {
        qusetion:"The external JavaScript file must contain the <script> tag.",
        a:'true',
        b:'fasle',
        c:'Both correct',
        d:'none',
        anw:'a',
    },
    {
        qusetion:"Inside which HTML element do we put the JavaScript?", 
        a:'javaScript',
        b:'<Script>',
        c:'js',
        d:'Scripting',
        anw:'b',
    },
    {
        qusetion:"JavaScript is the same as Java.",
        a:'none',
        b:'fasle',
        c:'Both correct',
        d:'true',
        anw:'d',
    },
    {
        qusetion:"Which event occurs when the user clicks on an HTML element?",
        a:'onmouseclick',
        b:'onclick',
        c:'onchange',
        d:'onmouseover',
        anw:'d',
    },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const qusetionEl = document.querySelector('#question');
const A = document.querySelector('#option1');
const B = document.querySelector('#option2');
const C = document.querySelector('#option3');
const D = document.querySelector('#option4');
const submit = document.querySelector('#submit');


let currentquiez = 0;
let score = 0;
onload();
function onload() {
    selecledone();
    const quiaDatecurr = quiaDate[currentquiez];
   
    qusetionEl.innerText = quiaDatecurr.qusetion;
    A.innerText = quiaDatecurr.a;
    B.innerText = quiaDatecurr.b;
    C.innerText = quiaDatecurr.c;
    D.innerText = quiaDatecurr.d;



}

 
function selectquiaz (){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;

 }
 function selecledone(){
     answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
     });
 };
  submit.addEventListener('click',function(){
      const answer = selectquiaz ();
     if(answer){
         if(answer === quiaDate[currentquiez].anw){
             score++;
         }
         currentquiez++;
         if(currentquiez < quiaDate.length){
            onload();
         }
          else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quiaDate.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
         }
        }
     });