var side1 = document.querySelector("#s1");
var side2 = document.querySelector("#s2");
var output = document.querySelector("#output");
var btn1 = document.querySelector("#sub-btn");


function CalculateHypotenuse(a,b){
    const sumOfsquares = a*a +b*b;
    return sumOfsquares;

   }


function Calculate(){
   
   const sumOfsquares = CalculateHypotenuse(Number(side1.value),Number(side2.value));
   
   const Hypotenuse = Math.sqrt(sumOfsquares);
   console.log(Hypotenuse);
   output.innerText = Hypotenuse;
   
}


btn1.addEventListener('click',Calculate);