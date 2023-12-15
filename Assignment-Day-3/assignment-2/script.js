const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;


function displayCurrentName() {
    const currentNameElement = document.getElementById('current-name');
    currentNameElement.textContent = names[currentIndex];
}


function nextButtonHandler() {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
}


function prevButtonHandler() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
}


document.getElementById('next-btn').addEventListener('click', nextButtonHandler);
document.getElementById('prev-btn').addEventListener('click', prevButtonHandler);


displayCurrentName();
