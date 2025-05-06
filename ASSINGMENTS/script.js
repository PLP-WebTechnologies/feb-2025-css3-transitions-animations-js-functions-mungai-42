const button = document.getElementById('animateButton');  
const animatedBox = document.getElementById('animatedBox');  

// Function to animate the box  
function animateBox() {  
    animatedBox.classList.add('animate');  
    
    // Remove the animation class after the animation is done  
    setTimeout(() => {  
        animatedBox.classList.remove('animate');  
    }, 500); // Match with the CSS transition duration  
}  

// Function to store user preferences  
function storePreference() {  
    const isAnimated = true; // or false based on your preference logic  
    localStorage.setItem('animationPreference', JSON.stringify(isAnimated));  
}  

// Function to retrieve user preferences  
function retrievePreference() {  
    const preference = localStorage.getItem('animationPreference');  
    if (preference !== null) {  
        return JSON.parse(preference);  
    }  
    return null; // or a default value  
}  

// Attach event listener  
button.addEventListener('click', () => {  
    animateBox(); // Trigger animation  
    storePreference(); // Store action in local storage  
});  

// Retrieve and log user preference on load  
document.addEventListener('DOMContentLoaded', () => {  
    const userPrefersAnimation = retrievePreference();  
    console.log('User prefers animation:', userPrefersAnimation);  
});