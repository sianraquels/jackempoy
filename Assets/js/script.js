// try
console.log("hellowkhey");

// set score
let computerscore = 0;
let userscore=0;

// getvalue
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("computerscore");

// scoreboard
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");

// getchoices
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");

// try
const computerImg_div = document.getElementById("computerimg");
const userimg = document.getElementById("userimg");


// convertttt try
// convert



// computer play/computerchoice
function getComputerChoice()
{
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
// console.log(getComputerChoice()); -- view computer choice randomly
function win(userChoic, computerchoice)
{
	console.log("win" + userscore);
	userscore++;
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML  = computerscore;
	result_div.innerHTML = "User Win";
	// console.log(computerchoice);
		// console.log("choiceko"+userChoice);

	// computerImg_div.src = images;

}
function lose()
{
	console.log("lose" + computerscore);
	computerscore++;
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML  = computerscore;
	result_div.innerHTML = "Computer Win";
	// insertimages();
}
function draw()
{
	console.log("draw");
	userScore_span.innerHTML = userscore;
	computerScore_span.innerHTML  = computerscore;
	result_div.innerHTML = "Draw";
}

// userfunction
// gamee
function game(userChoice)
{
		// console.log("keke"+userChoice);
		const computerchoice = getComputerChoice();
		// console.log(computerchoice);
		// console.log("choiceko"+userChoice);

		// gameplay
		switch (userChoice + computerchoice)
		{
			case "rs":
				document.getElementById('computerimg').src="Assets/img/scissor.jpg";
				document.getElementById('userimg').src = "Assets/img/rock.jpg";
				// document.getElementsById('user').backgroundColor = blue;
				win();
				break;
			case "pr":
				document.getElementById('computerimg').src="Assets/img/rock.jpg";
				document.getElementById('userimg').src = "Assets/img/paper.jpg";
				// document.getElementsById('user').backgroundColor = blue;
				win();
				break;
			case "sp":
				document.getElementById('computerimg').src="Assets/img/paper.jpg";
				document.getElementById('userimg').src = "Assets/img/scissor.jpg";
				// document.getElementsById('user').backgroundColor = blue;
				win();
				break;
			// console.log("userwin");
			// insertimages();
			break;
			case "rp":
				document.getElementById('userimg').src="Assets/img/rock.jpg";
				document.getElementById('computerimg').src="Assets/img/paper.jpg";
				lose()
				break;
			case "ps":
				document.getElementById('userimg').src="Assets/img/paper.jpg";
				document.getElementById('computerimg').src="Assets/img/scissor.jpg";
				lose()
				break;
			case "sr":
				document.getElementById('userimg').src="Assets/img/scissor.jpg";
				document.getElementById('computerimg').src="Assets/img/rock.jpg";
				lose()
				break;
			case "ss":
			document.getElementById('computerimg').src = "Assets/img/scissor.jpg";
			document.getElementById('userimg').src = "Assets/img/scissor.jpg";
			draw();
			break;
			case "rr":
			document.getElementById('computerimg').src = "Assets/img/rock.jpg";
			document.getElementById('userimg').src = "Assets/img/rock.jpg";
			draw()
			break;
			case "pp":
			document.getElementById('computerimg').src="Assets/img/paper.jpg";
			document.getElementById('userimg').src="Assets/img/paper.jpg";
			draw();
			break;

		}
}

function main ()
{
	// var x = document.getElementById('#userimg');
		// clicabletry
		rock_div.addEventListener('click', function () {
			// console.log("hey you clickon rock");
			// document.getElementById('userimg').src = "Assets/img/rock.jpg";
			game("r");
		});
		paper_div.addEventListener('click', function () {
			// console.log("hey you clickon paper");
			// document.getElementById('userimg').src = "Assets/img/paper.jpg";
			game("p");
		});
		scissor_div.addEventListener('click', function () {
			// console.log("hey you clickon scissor");
			// document.getElementById('userimg').src = "Assets/img/scissor.jpg";
			game("s");
		});
}
main ();