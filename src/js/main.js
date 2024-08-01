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
    const message = coffeeList.map(el => `-${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
    alert(`Coffee list: \n\n${message}`);
}

//2 & 3. List coffees by price
const orderedList = (order) => { 
    const orderedList = [...coffeeList];
    if (order === "asc") {
        orderedList.sort((a,b) => a.price - b.price);
        const orderedMessage = orderedList.map(el => `-${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
        alert(`Coffee list ordered by ascendent price: \n\n${orderedMessage}`);
    } else if (order === "desc"){
        orderedList.sort((a,b) => b.price - a.price);
        const orderedMessage = orderedList.map(el => `-${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
        alert(`Coffee list ordered by descendent price: \n\n${orderedMessage}`);
    }
}

//4. List coffee by specific origin.
const originList = () => {
    let origin = prompt("Enter a country to filter the coffee from.");
        if (origin === null) {
            alert("Please enter a valid country from the coffee list.");
            return;
        }
    const validOrigin = coffeeList.find(el => el.origin.toLowerCase() === origin.toLowerCase());
    if (!validOrigin) {
        alert("Please enter a valid country from the coffee list.");
        return;
    }
    const originList = coffeeList.filter(el => el.origin.toLowerCase() === origin.toLowerCase());
    const originMessage = originList.map(el => `-${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
    alert(`${originList[0].origin}'s coffee list: \n\n${originMessage}`);
}

//5. Add coffees to cart.
let cart = [];
const addCart = () => {
    let loop;
    do{
        const message = coffeeList.map((el, index) => `${el.id} ${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
        let item = parseInt(prompt(`Select one item to add to the cart:\n\n${message}`));
        if (isNaN(item) ||item <= 0 || item > coffeeList.length) {
            alert("Warning! The item selected must exist");
            break;
        }
        const searched = coffeeList.find(el => el.id === item);
        cart.push(searched);
        loop = confirm("Would you like to add another item to the cart?")
    }while (loop === true)
}

//6. Remove coffees from cart.
const removeCart = () => {
    let loop;
    do{
        if (cart.length === 0) {
            alert("The cart is empty.");
            return;
        }
        const message = cart.map((el) => `${el.id} ${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
        let item = parseInt(prompt(`Select one item to remove from the cart:\n\n${message}`));
        if (item <= 0 || item > coffeeList.length){
            alert("Warning, the item must exist.");
            return;
        }
        const removedItem = cart.find(el => el.name === item);
        const newCart = cart.filter(el => el.id !== item);
        cart = newCart;
        loop = confirm(`The item ${removedItem} has been removed from the cart. Would you like to remove another one?`);
    }while (loop === true)
}

//7. Show cart.
const showCart = () => {
    if (cart.length === 0) {
        alert("The cart is empty.");
        return;
    }
    const message = cart.map(el => `-${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
    const total = parseFloat(cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
    //const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Current cart total: USD$${total}\n\nCurrent cart:\n\n${message}`);
}

//8. Checkout.
const checkout = () => {
    if (cart.length === 0) {
        alert("The cart is empty.");
        return;
    }
    const message = cart.map(el => `${el.name}, ${el.origin}, USD$${el.price}`).join('\n\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if(confirm(`Your total is USD$${total}. Proceed to Checkout?`)){
        let cardOwner = prompt("Enter your name as it appears on your credit/debit card.");
        if (cardOwner === null || cardOwner === "" || cardOwner.toString().length < 5 || cardOwner.toString().length > 40) {
            alert("Warning! The name appears to be empty, too short or too long.");
            return;
        }
        let cardNumber = parseInt(prompt("Enter your card number."));
        let cardNumberString = cardNumber.toString();
        if (cardNumber === NaN ||cardNumber === 0 || cardNumber === null || cardNumberString.length < 14 || cardNumberString.length > 16) {
            alert("Warning! The number should range from 14 to 16 digits.");
            return;
        }
        let cardCode = parseInt(prompt("Enter your card security code."));
        let cardCodeString = cardCode.toString();
        if (cardNumber === NaN ||cardCode === 0 || cardCode === null || cardCodeString.length < 3 || cardCodeString.length > 4) {
            alert("Warning! The code should range from 3 to 4 digits.");
            return;
        }
        let cardExpiryDate = prompt("Enter your card expiry date (MM/YYYY).");
        if (cardExpiryDate === null || cardExpiryDate === "") {
            alert("Warning! You must enter a valid card expiry date.");
            return;
        }
        alert(`Thank you for your purchase at Console Commerce!\nHere's your recipt:\n\nFull name: ${cardOwner}\nPurchase date: ${new Date().toLocaleString()}\nItems bought:\n\n${message}\n\nTotal: USD$${total}`);
    }
}

const menu = () => {
    let loop;
    do{  
        let op = parseInt(prompt(`Welcome to Console Coffee☕! Enter a number to pick an option:\n\n1. List all coffees.\n2. List all coffees by ascendent price.\n3. List all coffees by descendent price.\n4. List coffee by specific origin.\n5. Add coffes to cart.\n6. Remove coffees from cart.\n7. Show cart.\n8. Checkout.`));
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
        loop = confirm("Would you like to go back to the menu? Press Cancel to exit Console Coffee.");
    }while(loop === true);
}
setTimeout(() => {menu()}, 1000);