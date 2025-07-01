// import {Craete} from "./Function/Craete.js"
import { ask } from './Function/GetInputFromUser.js';



console.log("Please select from the menu:");
ask("1. Start\n2. Settings\n3. Exit\n> ", (answer) => {
  switch(answer) {
    case "1":
      console.log("Starting the program...");
      break;
    case "2":
      console.log("Opening settings...");
      break;
    case "3":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid option.");
  }
});

