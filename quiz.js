const formQuiz = document.querySelector(".quizform");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const answers=['90°','right angle','3','180°','°90'];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(formQuiz);
    for (let value of formResult.values()){
        //console.log(value);
        if(value === answers[index]){
            score=score+1;
        }
        index=index+1;
    }
    //console.log(score);
    output.innerText = "your score is " + score;
}


btn.addEventListener("click",calculateScore);