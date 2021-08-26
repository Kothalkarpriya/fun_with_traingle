const quizForm = document.querySelector('.quiz-form');
const submitAnswer = document.querySelector('#sub-ans');
const output = document.querySelector('#output');

const correctAnswer = ['90°', 'right'];

submitAnswer.addEventListener('click', calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;
    const formData = new FormData(quizForm);
    for (let value of formData.values()) {
        // console.log(value);
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    // console.log(formData)
    // console.log(score);
    output.innerText = 'You score is : ' + score;
}