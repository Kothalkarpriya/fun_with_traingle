const checkButton = document.querySelector('#btn');
const inputs = document.querySelectorAll('.input');

const output = document.querySelector('#output');

checkButton.addEventListener('click', ()=>{
    if(inputs[0].value =='' || inputs[1].value ==''){
        output.style.color = 'red';
        output.innerText = 'Please insert both the Base and Height';
    }
    else{
        calculateArea();
    }
});


function calculateArea(){

    const area = formula(Number(inputs[0].value),Number(inputs[1].value));
    // console.log(area);
    output.style.color = '#ffff3f';
    output.innerText = "The area of the traingle is " + area + "cm²";

}

function formula(a,b){
    // console.log('came');
    const area = (a * b)/2;
    return(area);

}