// See the timer increment every second once the page has loaded.
// let incrementCount = setTimeout(() => {
let currentCount = 0;
let countHeader = document.querySelector("#counter");
let intervalId;

function incrementCount() {
    console.log("incrementCount() function called");
    currentCount += 1;    
    console.log("currentCount: ", currentCount);
    countHeader.textContent = currentCount;

    return currentCount;
}

function increaseButtonClick() {
    console.log("Increase button clicked!");
    currentCount += 1;
    countHeader.textContent = currentCount;    
    
    return currentCount;
}

function decreaseButtonClick() {
    console.log("Decrease button clicked!");
    currentCount -= 1;
    countHeader.textContent = currentCount;    

    return currentCount;
}

function pauseButtonClick() {
    minusButton = document.querySelector("#minus");
    plusButton = document.querySelector("#plus");
    heartButton = document.querySelector("#heart");
    pauseButton = document.querySelector("#pause");

    console.log("pauseButton.textContent: ", pauseButton.textContent);
    
    if (pauseButton.textContent.includes("pause")) {
        // pause the counter
        clearInterval(intervalId);
        intervalId = null;

        // disable all buttons except the pause button
        // From MDN:
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
    
        // switch the label on the button from "pause" to "resume"
        pauseButton.textContent = "resume";

        return intervalId;
    }
    if (pauseButton.textContent.includes("resume")) {
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;

        pauseButton.textContent = "pause";

        intervalId = setInterval(incrementCount, 1000);
    }
}

function formSubmit(e) {
    e.preventDefault();
    let commentInput = document.querySelector("#comment-input");
    let commentsList = document.querySelector("#list");

    console.log("commentInput.value: ", commentInput.value);

    let commentLi = document.createElement("li");
    commentLi.textContent = commentInput.value;
    console.log("commentLi.textContent: ", commentLi.textContent);

    commentsList.appendChild(commentLi);
}

if (!intervalId) {
    intervalId = setInterval(incrementCount, 1000);
}

let plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", increaseButtonClick);

let minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", decreaseButtonClick);

let pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", pauseButtonClick);

// let commentSubmitButton = document.querySelector("#submit");
// commentSubmitButton.addEventListener("submit", commentButtonClick);

let commentForm = document.querySelector("#comment-form");
commentForm.addEventListener("submit", formSubmit);
