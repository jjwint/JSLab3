var grantHealth = 10;
var userHealth = 40;
var grantLives = 3;
var userWins = 0;
var grantWins = 0;

var character = {
	name: null,
	health: 40,
	healsRemaining: 2,
	wins: 0,
	generateAttackDamage: function() {
		return Math.floor(math.random() * 3) + 1;
	},
	heal: function() {
		this.health += Math.floor(math.random() * 10) + 1;
		this.healsRemaining --;
	}
}

var grant = {
	name: null,
	health: 10,
	generateAttackDamage: function() {
		return Math.floor(math.random() * 5) + 1;
	}
}

function startGame() {
	var playGame = prompt("Do you want to play a game with two characters?");
	if (playGame.toLowerCase() === "yes") {
		var userName = prompt ("What do you want to name your character?");
		startCombat(userName);
	}
}

function getDamage() {
	 var damage = Math.floor(Math.random() * 5) + 1;
	 return damage;
}

function startCombat (userName) {  
	while (userHealth > 0 && grantHealth > 0 && grantLives > 0) {
	 
		var attackOrQuit = prompt("Do you want to attack, heal, or quit?");
		if (attackOrQuit.toLowerCase() === "attack") {
			var userDamage = getDamage();
			var grantDamage = getDamage();
			userHealth -= userDamage;
			grantHealth -= grantDamage;
			if (grantHealth  < 1 && grantLives >= 1) {
				grantLives --;
				userWins ++;
				if (grantLives >= 1) {
					console.log("THE ALMIGHTY GRANT HAS " + grantLives + " LIVES LEFT.");
					grantHealth = 10;
				}
			}
		} else if (attackOrQuit.toLowerCase() === "heal") {
			if (healsRemaining < 1) {
				break;
			}
			heal();
			break;
		} else if (attackOrQuit.toLowerCase() === "quit") {
			return;
		}
		console.log(userName + " has " + userHealth + " health left.")
		console.log("The Almighty Grant has " + grantHealth + " health left.")
	}
	if (grantLives <= 0) {
		console.log(userName + " is the winner!");
	} else if (userHealth <= 0) {
		console.log("The Almighty Grant is the winner!");
	}
}

startGame();