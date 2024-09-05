const questions = [
    {
        text: "What is my name?",
        options: ["aki", "bhatta"],  // Add two options here
        image: "akash1.jpg",  
        music: "mysong1.mp3"    
    },
    {
        text: "Which do you prefer?",
        options: ["aki", "akash"],
        image: "akash2.jpg",
        music: "mysong2.mp3"
    },
    {
        text: "What is my favorite animal?",
        options: ["Elephant", "Tiger"],
        image: "akash3.jpg",
        music: "mysong3.mp3"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let audio = new Audio(); // Create a single audio element

// Function to load the next question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    document.getElementById('question').innerText = question.text;
    document.getElementById('question-image').src = question.image;
    
    // Update the options dynamically
    const optionButtons = document.getElementsByClassName('option-btn');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = question.options[i];
    }
    
    // Play the music in the background
    audio.src = question.music;
    audio.play();
}

// Function to handle answer selection
function selectOption() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz complete!");
    }
}

// Start by loading the first question
window.onload = loadQuestion;
