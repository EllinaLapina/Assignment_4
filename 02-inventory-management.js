/*eslint-env browser*/

var product1 = [];
product1["sku"] = 111;
product1["product"] = "Phone Case";
product1["quantity"] = 5;
product1["cost"] = 4.89;

var product2 = [];
product2["sku"] = 222;
product2["product"] = "Ruler";
product2["quantity"] = 7;
product2["cost"] = 3.20;

var product3 = [];
product3["sku"] = 333;
product3["product"] = "Bag";
product3["quantity"] = 20;
product3["cost"] = 167.99;

var product4 = [];
product4["sku"] = 444;
product4["product"] = "Pen";
product4["quantity"] = 37;
product4["cost"] = 1.59;

var product5 = [];
product5["sku"] = 555;
product5["product"] = "Water Bottle";
product5["quantity"] = 33;
product5["cost"] = 3.29;

var inventory = [product1, product2, product3, product4, product5];

function menu() {
    window.console.log("Welcome to the Inventory");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view() {
    "use strict";
    var i, storage;
    for (i in inventory) {
        storage = localStorage.getItem(inventory[i].sku);
        if (storage !== null) {
            inventory[i].quantity = storage;
        }
        window.console.log(inventory[i].sku + " " + inventory[i].product + "  (" + inventory[i].quantity + ") $" + inventory[i].cost);
    }
    window.console.log(" ");
}
view();

function update() {
    "use strict";
    var i, newSku = parseInt(window.prompt("Enter a SKU you want to update."), 10);
    if (newSku !== 111 && newSku !== 222 && newSku !== 333 && newSku !== 444 && newSku !== 555) {
        window.alert("You did not enter a correct SKU number");
        } else {
            for (i in inventory) {
                if (newSku === inventory[i].sku) {
                    var newQuantity = parseInt(window.prompt("Enter new quntity"), 10);
                    inventory[i].quantity = newQuantity;
                    localStorage.setItem(inventory[i].sku, newQuantity);
                }
            
                
            }
            
        }
}

function main() {
    "use strict";
    menu();
    
    while (true) {
        var command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Inventory terminated.");
    
}
main();



