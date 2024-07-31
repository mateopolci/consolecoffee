class Coffee{
    constructor(id, name, origin, price){
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.price = price;
    }
}

const coffeeList = [
    new Coffee(1,'Ethiopian Yirgacheffe', 'Ethiopia', 18.99),
    new Coffee(2,'Colombian Supremo', 'Colombia', 16.49),
    new Coffee(3,'Guatemalan Antigua', 'Guatemala', 17.75),
    new Coffee(4,'Costa Rican Tarrazu', 'Costa Rica', 18.00),
    new Coffee(5,'Brazilian Santos', 'Brazil', 15.99),
    new Coffee(6,'Honduran Marcala', 'Honduras', 16.25),
    new Coffee(7,'Ethiopian Sidamo', 'Ethiopia', 19.75),
    new Coffee(8,'Colombian Excelso', 'Colombia', 17.00),
    new Coffee(9,'Guatemalan Huehuetenango', 'Guatemala', 18.50),
    new Coffee(10,'Sumatra Lintong', 'Indonesia', 20.00),
    new Coffee(11,'Costa Rican Brunca', 'Costa Rica', 17.50)
];

//1. List all coffees.
const list = () => {
    const message = coffeeList.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
    alert(`Coffee list: \n\n${message}`);
}

//2 & 3. List coffees by price
const orderedList = (order) => { 
    const orderedList = [...coffeeList];
    if (order === "asc") {
        orderedList.sort((a,b) => a.price - b.price);
        const orderedMessage = orderedList.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
        alert(`Coffee list ordered by ascendent price: \n\n${orderedMessage}`);
    } else if (order === "desc"){
        orderedList.sort((a,b) => b.price - a.price);
        const orderedMessage = orderedList.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
        alert(`Coffee list ordered by descendent price: \n\n${orderedMessage}`);
    }
}

//4. List coffee by specific origin.
const originList = () => {
    let origin = prompt("Enter a country to filter the coffee from");
    const validOrigin = coffeeList.find(el => el.origin.toLowerCase() === origin);
    if (!validOrigin) {
        alert("Please enter a valid country from the coffee list.");
        return;
    }
    const originList = coffeeList.filter(el => el.origin.toLowerCase() === origin.toLowerCase());
    const originMessage = originList.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
    alert(`${originList[0].origin}'s coffee list: \n\n${originMessage}`);
}

//5. Add coffees to cart.
const cart = [];
const addCart = () => {
    let loop;
    do {
        const message = coffeeList.map((el, index) => `${el.id} ${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
        let item = parseInt(prompt(`Select one item to add to the cart: \n\n ${message}`));
        const searched = coffeeList.find(el => el.id === item);
        cart.push(searched);
        loop = parseInt(prompt(`Press 1 to add another item to the cart, press 0 to go back`));
    }while (loop === 1)
}

//6. Remove coffees from cart.
const removeCart = () => {
    let loop;
    do {
        const message = cart.map((el, index) => `${el.id} ${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
        let item = parseInt(prompt(`Select one item to remove from the cart: \n\n ${message}`));
        const searched = coffeeList.find(el => el.id === item);
        
        cart.splice(searched.id, 1);
        alert(`The item ${searched.name} has been removed from the cart`);

        loop = parseInt(prompt(`Press 1 to remove another item to the cart, press 0 to go back`));
    }while (loop === 1)
}

//7. Show cart.
const showCart = () => {
    const message = cart.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Current cart total: ${total}\n\n Current cart:\n\n${message}`);
}

//8. Checkout.
const checkout = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if(confirm(`Your total is ${total}. Proceed to Checkout?`)){
        let cardOwner = prompt("Enter your name as it appears on the card");
            if (cardOwner === "") {
                alert("Warning! You must enter a valid name");
                return;
            }
        let cardNumber = parseInt(prompt("Enter your card number"));
            if (cardNumber === "0" || typeof cardNumber !== "number") {
                alert("Warning! You must enter a valid card number");
                return;
            }
        let cardCode = parseInt(prompt("Enter your card security code"));
            if (cardCode === "0" || typeof cardCode !== "number") {
                alert("Warning! You must enter a valid card code");
                return;
            }
        let cardExpiryDate = prompt("Enter your card expiry date (MM/YYYY)");
        if (cardExpiryDate) { /*Manejar info de date*/
            alert("Warning! You must enter a valid card expiry date");
            return;
        }
        alert("Thank you for your purchase at Console Commerce!");
    }
}

const menu = () => {
    let loop = 1;
    while (loop === 1) {
        let op = parseInt(prompt(`Enter a number to pick an option:
        1. List all coffees.
        2. List all coffees by ascendent price.
        3. List all coffees by descendent price.
        4. List coffe by specific origin.
        5. Add coffes to cart.
        6. Remove coffees from cart.
        7. Show cart.
        8. Checkout.`));
        switch (op) {
            case 1:
                //1. List all coffees by ascendent price.
                list();
                break;
            case 2:
                //2. List all coffees by ascendent price.
                orderedList("asc");
                break;
            case 3:
                //3. List all coffees by descendent price.
                orderedList("desc");
                break;
            case 4:
                //4. List coffee by specific origin.
                originList();
                break;
            case 5:
                //5. Add coffes to cart.
                addCart();
                break;
            case 6:
                //6. Remove coffees from cart.
                removeCart();
                break;
            case 7:
                //7. Show cart.
                showCart();
                break;
            case 8:
                //8. Checkout.
                checkout();
                break;
            default:
                break;
        }
        loop = parseInt(prompt(`Press 1 to go back to the menu. Press 0 to exit from Console Coffee.`));
    }
}
setTimeout(() => {menu()}, 500);