window.addEventListener("DOMContentLoaded", () => {
	const emojiContainer = document.querySelector(".emoji-container"),
		card = document.querySelector(".card"),
		emojiOutput = document.querySelectorAll(".emoji-output"),
		dialogBox = document.querySelector(".dialog-box"),
		final = document.querySelector(".final"),
		dialogMessage = document.querySelector(".dialog-message"),
		bellSound1 = document.querySelector(".bell-sound-1"),
		bellSound2 = document.querySelector(".bell-sound-2"),
		bellSound3 = document.querySelector(".bell-sound-3"),
		winSound = document.querySelector(".win-sound"),
		loseSound = document.querySelector(".lose-sound"),
		winner = Math.floor(Math.random() * 2),
		outputEmojis = (a) => emojiOutput.forEach((emoji, i) => (emoji.textContent = a[i])),
		shuffleArray = (a) => {
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}

			return a;
		},
		init = () => {
			if (winner) {
				emojis.push("💎");
				message = "CONGRATULATIONS!!";
			} else {
				emojis.push("⌚");
				message = "CONGRATULATIONS!";

			}

			outputEmojis(shuffleArray(emojis));
		},
		rainMoney = () => {
			const w = window.innerWidth;

			//Create dollar bills
			for (i = 0; i < 70; i++) {
				const dollar = document.createElement("div");

				dollar.classList.add("dollar-bill");
				dollar.textContent = "💵";
				dollar.style.left = `${Math.floor(Math.random() * w)}px`;

				document.body.appendChild(dollar);
			}
		};

	let emojis = ["💎", "💎", "🏀", "💎", "👑", "💎", "💎", "💎"],
		winningEmojisFound = 0,
		emojisRemaining = 9,
		message = "";

	emojiContainer.addEventListener("click", (e) => {
		const target = e.target;

		if (target.classList.contains("emoji-btn") && !target.classList.contains("uncovered")) {
			emojisRemaining--;

			target.classList.add("uncovered");

			//Check if winning emoji found
			if (target.textContent === "💎") {
				target.classList.add("winning-emoji");

				//Play winning emoji found sound effect
				switch (winningEmojisFound) {
					case 0:
						bellSound1.play();
						break;
					case 1:
						bellSound2.play();
						break;
					case 2:
						bellSound3.play();
						break;
					case 3:
						bellSound1.play();
						break;
					case 4:
						bellSound2.play();
						break;
					case 5:
						bellSound3.play();
					case 6:
						bellSound1.play();
				}

				winningEmojisFound++;
			}

			//Check if all emojis revealed
			if (emojisRemaining === 0) {
				//Play sound effect
				setTimeout(() => {
					if (winner) {
						winSound.play();
						setTimeout(() => rainMoney(), 1200);
					} else {
						loseSound.play();
						setTimeout(() => rainMoney(), 1200);
					}
				}, 1500);

				//Show dialog box
				dialogBox.classList.add("show-dialog");
				setTimeout(() => {
					card.style.display = "none";
				}, 1200);
				dialogMessage.textContent = message;
				setTimeout(() => {
					loadingBarMove()
				}, 1500);
			}
		}
	});

	// Loading bar
	function loadingBarMove() {
		var elem = document.getElementById("myBar");
		var percent = document.getElementById("percent");
		var width = 1;
		var id = setInterval(frame, 90);

		function frame() {
			if (width >= 100) {
				clearInterval(id);
				dialogBox.classList.remove("show-dialog");
				final.classList.add("show-dialog");
			} else {
				width++;
				elem.style.width = width + "%";
				percent.innerHTML = width + "%";
			}

			if (width >= 25) {
				$("#tips").html('<strong style="color: #00D1FF";>TIP 1:</strong> Minimize risk by playing with bonus money.');
			}
			if (width >= 50) {
				$("#tips").html('<strong style="color: #00D1FF";>TIP 2:</strong> Progressive jackpot slots payout the most!');
			}
			if (width >= 75) {
				$("#tips").html('<strong style="color: #00D1FF";>TIP 3:</strong> Cash out your winnings & enjoy it today!');
			}
		}
	}

	//Initialize game
	init();
});

// Intro screen popup

const startGame = document.getElementById("startGame");
const card = document.querySelector(".card");
const intro = document.querySelector(".intro");

window.onload = function () {
	card.classList.add("blur")
};

startGame.addEventListener("click", function () {
	intro.style.display = "none";
	card.classList.remove("blur");
});




// Random number generator for popup

function random_item(items) {
	return items[Math.floor(Math.random() * items.length)];
}

var items = [
	"45",
	"46",
	"47",
	"48",
	"49",
];
document.getElementById("no").innerText = random_item(items);