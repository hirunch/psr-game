let agree = confirm("You Can Play this");

if (agree) {

  let keyWord = prompt(`Enter a "paper", "rock" or scissor`);

  keyWord = keyWord.toLowerCase();
  keyWord = keyWord.trim();

  if (keyWord === "paper" || keyWord === "rock" || keyWord === "scissor"){

    let computer = Math.floor(Math.random()*3)+1;
    if (computer === 1){

      computer = "paper";

    }
    else if (computer === 2){

      computer = "rock";

    }

    else if(computer === 3){

      computer = "scissor";

    }

    else {

      computer = "Invalid";

    }


    if (keyWord === computer){

      window.alert("You Win!");

    }

    else {

      window.alert("You Lose!");


    }
  }
  else {

    window.alert("Invalid Input, Please Try Again!");
  }
}