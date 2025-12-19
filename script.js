const statusHeading = document.getElementById('status-text');
const toggleBtn = document.getElementById('toggle-btn');

let isSwitchedOn = false;

toggleBtn.addEventListener('click', function() {
    if (isSwitchedOn) {
        statusHeading.textContent = "OFF";
        statusHeading.style.color = "#333";
        isSwitchedOn = false;
    } else {
        statusHeading.textContent = "ON";
        statusHeading.style.color = "#27ae60";
        isSwitchedOn = true;
    }
});
