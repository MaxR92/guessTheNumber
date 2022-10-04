const guessGame = () => {
    const difficulty = prompt("Select your difficulty level! \n type 1 for easy ( 1 - 4 ) \n type 2 for medium ( 1 - 7 ) \n type 3 for hard ( 1 - 10 )")
    switch (difficulty) {
    case "1":
        const randomNum1 = String(Math.floor(Math.random() * 4 + 1));
        console.log(randomNum1);
        let counter1 = 0;
        const userName1 = prompt("Enter Username")
        const input1 = prompt("Guess a number between 1-4:");
        for (let i = 0; i < 2; i++) {
            if (input1 === randomNum1) {
                counter1++;
                alert(`You did it ${userName1}, the number was ${randomNum1} ! Attempts: ${counter1} `);
                break;
            } else {
                counter1++;
                // console.log("Counter is:", counter);
                const input2 = prompt("Wrong! Sorry " + userName1 +  "!! Try Again!");
                // console.log("input2 is: ", input2);
            if (input2 === randomNum1 && counter1 !== 3) {
                counter1++;
                alert(`You did it ${userName1}, the number was ${randomNum1} ! Attempts: ${counter1} `);
                break;
            } else if (input2 !== randomNum1 && counter1 === 2) {
                alert(
                `Sorry ${userName1}, you failed to guess the number in three attempts. The number was ${randomNum1} !`
      );
    }
  }
}
    break;

    case "2":
        const randomNum2 = String(Math.floor(Math.random() * 7 + 1));
        console.log(randomNum2);
        let counter2 = 0;
        const userName2 = prompt("Enter Username")
        const input3 = prompt("Guess a number between 1-7:");
        for (let i = 0; i < 2; i++) {
            if (input3 === randomNum2) {
                counter2++;
                alert(`You did it ${userName2}, the number was ${randomNum2} ! Attempts: ${counter2} `);
                break;
            } else {
                counter2++;
                // console.log("Counter is:", counter);
                const input4 = prompt("Wrong! Sorry " + userName2 +  "!! Try Again!");
                // console.log("input2 is: ", input2);
            if (input4 === randomNum2 && counter2 !== 3) {
                counter2++;
                alert(`You did it ${userName2}, the number was ${randomNum2} ! Attempts: ${counter2} `);
                break;
            } else if (input4 !== randomNum2 && counter2 === 2) {
                alert(
                `Sorry ${userName2}, you failed to guess the number in three attempts. The number was ${randomNum2} !`
      );
    }
  }
}
    break;
    case "3":
        const randomNum3 = String(Math.floor(Math.random() * 10 + 1));
        console.log(randomNum3);
        let counter3 = 0;
        const userName3 = prompt("Enter Username")
        const input5 = prompt("Guess a number between 1-10:");
        for (let i = 0; i < 2; i++) {
            if (input5 === randomNum3) {
            counter3++;
            alert(`You did it ${userName3}, the number was ${randomNum3} ! Attempts: ${counter3} `);
            break;
        } else {
            counter3++;
            // console.log("Counter is:", counter);
            const input6 = prompt("Wrong! Sorry " + userName3 +  "!! Try Again!");
            // console.log("input2 is: ", input2);
        if (input6 === randomNum3 && counter3 !== 3) {
            counter3++;
            alert(`You did it ${userName3}, the number was ${randomNum3} ! Attempts: ${counter3} `);
            break;
        } else if (input6 !== randomNum3 && counter3 === 2) {
            alert(
            `Sorry ${userName3}, you failed to guess the number in three attempts. The number was ${randomNum3} !`
      );
    }
  }
}
    break;
}
}

guessGame()