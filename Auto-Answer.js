// Function to auto answer questions
function autoAnswer() {
  // Find the current question
  const question = document.querySelector('#question');
  
  // If the question exists, find the correct answer
  if (question) {
    const correctAnswer = question.querySelector('.correct-answer');
    
    // Simulate a click on the correct answer
    correctAnswer.click();
  }
}

// Auto answer questions every second
setInterval(autoAnswer, 1000);
