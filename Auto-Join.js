// Function to auto join games
function autoJoinGames() {
  // Find the 'Join Game' button
  const joinButton = document.querySelector('#joinButton');
  
  // Simulate a click on the 'Join Game' button
  joinButton.click();
}

// Auto join games every second
setInterval(autoJoinGames, 1000);
