// Function to create an invisible shield
function createShield() {
  // Create a new element to act as the shield
  const shield = document.createElement('div');
  shield.style.width = '100px';
  shield.style.height = '100px';
  shield.style.position = 'absolute';
  shield.style.top = '0px';
  shield.style.left = '0px';
  shield.style.zIndex = '1000000';
  shield.style.background = 'transparent';
  shield.style.border = 'none';
  
  // Append the shield to the body
  document.body.appendChild(shield);
}

// Call the createShield function
createShield();
