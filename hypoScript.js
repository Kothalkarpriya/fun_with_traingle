const sides = document.querySelectorAll('.input');
const checkButton = document.querySelector('#check-btn');
const output = document.querySelector('#output');

checkButton.addEventListener('click',checkInputs);

function checkInputs(){
    if(sides[0].value == '' || sides[1].value == ''){
        // alert('Please input');
        output.style.color = 'red';
        output.innerText = "Please insert both the values";
    } else if (sides[0].value < 0 || sides[1].value < 0)
    {
        output.style.color = 'red';
        output.innerText = "Please insert positive values";
    }
    else{
        calculateHypotenuse();
    }
}
function calculateHypotenuse(){
    const score = calculateScore(Number(sides[0].value), Number(sides[1].value)); 
    // console.log(score);
    output.style.color ='#ffff3f';
    output.innerText = "The length of Hypotenuse is " + score;
}

function calculateScore(a,b){
    const sum = a*a + b*b;
    const hypo = Math.sqrt(sum);
    return(hypo);    
}