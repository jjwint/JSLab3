var grantLives = 3;

var character = {
	name: null,
	health: 40,
	healsRemaining: 2,
	wins: 0,
	generateAttackDamage: function() {
		return Math.floor(Math.random() * 3) + 1;
	},
	heal: function() {
		this.health += Math.floor(Math.random() * 10) + 1;
		this.healsRemaining --;
	}
}

var grant = {
	name: null,
	health: 10,
	generateAttackDamage: function() {
		return Math.floor(Math.random() * 5) + 1;
	}
}

function startGame() {
	var playGame = prompt("Do you want to play a game with two characters?");
	if (playGame.toLowerCase() === "yes") {
		var userName = prompt ("What do you want to name your character?");
		startCombat(userName);
	}
}

function startCombat (userName, healsRemaining) {  
	while (character.health > 0 && grant.health > 0) {
	 
		var attackOrQuit = prompt("Do you want to attack, heal, or quit?");

		if (attackOrQuit.toLowerCase() === "attack") {
			character.health -= grant.generateAttackDamage();
			grant.health -= character.generateAttackDamage();

			if (grant.health  < 1 && grantLives >= 1) {
				grantLives --;
				character.wins ++;

				if (grantLives >= 1) {
					console.log("THE ALMIGHTY GRANT HAS " + grantLives + " LIVES LEFT.");
					grant.health = 10;
				}
			}
		} else if (attackOrQuit.toLowerCase() === "heal") {
			if (character.healsRemaining > 0) {
				character.heal();
			}
		} else if (attackOrQuit.toLowerCase() === "quit") {
			return;
		}
		console.log(userName + " has " + character.health + " health left.")
		console.log("The Almighty Grant has " + grant.health + " health left.")
	}
	if (grantLives <= 0) {
		console.log(userName + " is the winner!");
	} else if (character.health <= 0) {
		console.log("The Almighty Grant is the winner!");
	}
}

startGame();