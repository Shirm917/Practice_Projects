function addClickEvents() {
    const calculatorsBtns = document.body.getElementsByTagName("button");
    for (const btn of calculatorsBtns) {
        console.log(btn);
        btn.addEventListener("click", displayNumber);
    };
};

addClickEvents();

function displayNumber(event) {
    const display = document.body.querySelector(".display > span");
    const number = +event.target.value;
    console.log("number");
    display.textContent = number;
};