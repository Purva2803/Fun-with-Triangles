var s1= document.querySelector("#n1");
var s2= document.querySelector("#n2");
var s3= document.querySelector("#n3");
var btn = document.querySelector("#inbtn");
var output = document.querySelector("#output");
const sumOfAngles= Number(s1.value)+Number(s2.value)+Number(s3.value);

function isTriangele(){
    
   console.log(Number(s1.value),Number(s2.value),Number(s3.value));
   const sumOfAngles= Number(s1.value)+Number(s2.value)+Number(s3.value);
   
    if(sumOfAngles === 180){
        
        output.innerText="this is a triangle";
    }
    else{
    
        output.innerText="this is not a triangle";

    }
    
    
}



btn.addEventListener("click",isTriangele);