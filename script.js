const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const responseDiv = document.getElementById("response");

// "Yes" button event
yesButton.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    responseDiv.classList.remove("hidden");
});

// "No" button moves away when hovered
noButton.addEventListener("mouseover", function () {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
