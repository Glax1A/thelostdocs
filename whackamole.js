const gameBoard = document.querySelector("#game-board");
let score = 0;

// Function to create a hole
const createHole = () => {
  const hole = document.createElement("div");
  hole.classList.add("hole");
  hole.style.left = `${Math.floor(Math.random() * 450)}px`;
  gameBoard.appendChild(hole);
};

// Function to create a mole
const createMole = () => {
  const mole = document.createElement("div");
  mole.classList.add("mole");
  mole.style.left = `${Math.floor(Math.random() * 450)}px`;
  mole.addEventListener("click", () => {
    mole.style.bottom = "-100px";
    setTimeout(() => {
      mole.remove();
    }, 500);
    score++;
  });
  gameBoard.appendChild(mole);
  setTimeout(() => {
    mole.style.bottom = "0px";
  }, Math.random() * 1000);
};

// Initialize the game with 10 holes
for (let i = 0; i < 10; i++) {
  createHole();
}

// Start the game loop
setInterval(() => {
  createMole();
}, 1000);
