const sides = document.querySelectorAll('.input');
const checkButton = document.querySelector('#check-btn');
const output = document.querySelector('#output');

checkButton.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse(){
    const score = calculateScore(Number(sides[0].value), Number(sides[1].value)); 
    console.log(score);
    output.innerText = "The length of Hypotenuse is " + score;
}

function calculateScore(a,b){
    const sum = a*a + b*b;
    const hypo = Math.sqrt(sum);
    return(hypo);    
}