const showIntructionBtn = document.getElementById("instruction");
const closeModalBtn = document.querySelector(".closeModalBtn");
const startGameBtn = document.getElementById("startGame");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showLeaderboardBtn = document.getElementById("leaderboard");
const leaderboardModal = document.querySelector(".leaderboardModal")
const closeLeadModalBtn = document.querySelector(".closeLeadModalBtn");


const showlnstruction = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
const showLeaderboard = function () {
    leaderboardModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeLeadModal = function () {
    leaderboardModal.classList.add("hidden");
    overlay.classList.add("hidden");
}
function startGame () {
    window.location.href = "../Game Proper/Combination Lock.html";
}

startGameBtn.addEventListener("click", startGame);
showIntructionBtn.addEventListener("click", showlnstruction);
closeModalBtn.addEventListener("click", closeModal);

//LEADERBOARD
showLeaderboardBtn.addEventListener("click", showLeaderboard);
closeLeadModalBtn.addEventListener("click", closeLeadModal);
