
import { ask } from './Function/GetInputFromUser.js';
import { Read } from "./Function/CRUD.js"
import { Craete } from "./Function/CRUD.js"

function Menu() {
    console.log("Please select from the menu:");
    ask("1. Craete\n2. Read DB\n3. Update\n4. Delate\n5. Exit\n> ", (answer) => {
        switch (answer) {
            case "1":
                console.log("Starting the program...");
                break;
            case "2":
                console.log("Reading the DB 😃");
                Read("./DB/Data_base.txt",()=>
                ask("x", (y) => {
                    console.log("Hi from block 2")
                    Menu()
                }))
                break;
            case "3":
                console.log("Goodbye!");
                break;
            case "4":
                console.log("Goodbye!");
                break;
            case "5":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid option.");
        }
    });
}
Menu()