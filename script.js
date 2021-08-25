const angleInput = document.querySelectorAll('.angle-input'); 
const buttonIsTraingle = document.querySelector('#btn-is-traingle');
const outPut = document.querySelector('#output');

buttonIsTraingle.addEventListener("click",isTraingle);


function isTraingle(){
    const checkSum = calculateSum(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    // console.log(checkSum);
    if(checkSum == 180){
        console.log("Yeah! It forms a Traingle");
        outPut.innerText = "Yeah! It forms a Traingle";
    }else{
        console.log("Oh! It doesn't form a Traingle");
        outPut.innerText = "Oh! It doesn't form a Traingle";
    }

}

function calculateSum(angle1, angle2, angle3){

    const sum = angle1 + angle2 + angle3;
    // console.log(sum)
    return sum;

}