const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];

const question = document.querySelector('#questions h1')
const options = document.querySelector('#questions p')
const option1 = document.querySelector('#questions .option1')
const option2 = document.querySelector('#questions .option2')
const option3 = document.querySelector('#questions .option3')
const option4 = document.querySelector('#questions .option4')
const start = document.querySelector('#info button')
const info = document.querySelector('#info')
const questionSection = document.querySelector('#questions')
const allDone = document.querySelector('#all-done')
const ansStatus = document.querySelector('#questions h4')
let count = 0;
const next = document.querySelector('#next')
let score = 0;
const showScore = document.querySelector('#all-done p span')
let time = 50
const timer = document.querySelector('#time')
const submit = document.querySelector('#submit')




start.addEventListener('click', () => {


    info.style.display = 'none'
    questionSection.style.display = 'block'

    question.innerText = questions[0].questionText;
    option1.innerText = questions[0].options[0];
    option2.innerText = questions[0].options[1];
    option3.innerText = questions[0].options[2];
    option4.innerText = questions[0].options[3];

    t = setInterval(() => {
        time--
        timer.innerText = time
        if (time <= 0) {
            stop()
            questionSection.style.display = 'none'
            allDone.style.display = 'block'
        }
    }, 1000)


})

function stop() {
    clearInterval(t);
}

option1.addEventListener('click', () => {
    if (option1.innerText === questions[count].answer) {
        ansStatus.innerText = 'Correct'
    } else {
        ansStatus.innerText = 'Incorrect'
    }
})
option2.addEventListener('click', () => {
    if (option2.innerText === questions[count].answer) {
        ansStatus.innerText = 'Correct'
    } else {
        ansStatus.innerText = 'Incorrect'
    }
})
option3.addEventListener('click', () => {
    if (option3.innerText === questions[count].answer) {
        ansStatus.innerText = 'Correct'
    } else {
        ansStatus.innerText = 'Incorrect'
    }
})
option4.addEventListener('click', () => {
    if (option4.innerText === questions[count].answer) {
        ansStatus.innerText = 'Correct'
    } else {
        ansStatus.innerText = 'Incorrect'
    }
})

next.addEventListener('click', () => {
    if (ansStatus.innerText === 'Correct') {
        score += 2;
        showScore.innerText = score;
    }
    if (questions[count + 1]) {
        question.innerText = questions[count + 1].questionText;
        option1.innerText = questions[count + 1].options[0];
        option2.innerText = questions[count + 1].options[1];
        option3.innerText = questions[count + 1].options[2];
        option4.innerText = questions[count + 1].options[3];
        count++;
    } else {
        questionSection.style.display = 'none'
        allDone.style.display = 'block'
    }
})

submit.addEventListener('click', async () => {
    try {
        const response = await fetch('/assets/scores.json')
        const data = response.json()
        console.log(response)
        console.log(data.player1)
    } catch(err) {
        console.log(err)
    }
})


