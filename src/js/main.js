class Coffee{
    constructor(name, origin, price){
        this.name = name;
        this.origin = origin;
        this.price = price;
    }
}

const coffeeList = [
    new Coffee('Ethiopian Yirgacheffe', 'Ethiopia', 18.99),
    new Coffee('Colombian Supremo', 'Colombia', 16.49),
    new Coffee('Guatemalan Antigua', 'Guatemala', 17.75),
    new Coffee('Costa Rican Tarrazu', 'Costa Rica', 18.00),
    new Coffee('Brazilian Santos', 'Brazil', 15.99),
    new Coffee('Honduran Marcala', 'Honduras', 16.25),
    new Coffee('Ethiopian Sidamo', 'Ethiopia', 19.75),
    new Coffee('Colombian Excelso', 'Colombia', 17.00),
    new Coffee('Guatemalan Huehuetenango', 'Guatemala', 18.50),
    new Coffee('Sumatra Lintong', 'Indonesia', 20.00),
    new Coffee('Costa Rican Brunca', 'Costa Rica', 17.50)
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

//4. List coffe by specific origin.
const originList = (origin) => {
    const originList = coffeeList.filter(el => el.origin.toLowerCase() === origin.toLowerCase());
    const originMessage = originList.map(el => `${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
    alert(`${originList[0].origin}'s coffee list: \n\n${originMessage}`);
}

const cart = [];

//5. Add coffes to cart.
const addCart = () => {
    let i = 1, loop = 1;
    while (loop === 1) {
        const message = coffeeList.map((el, index) => `${index+1} ${el.name}, ${el.origin}, ${el.price}`).join('\n\n');
        let item = parseInt(prompt(`Select one item or more to add to the cart: \n\n ${message}`));
        cart.push()
        item = parseInt(prompt(`Press 1 to add another item to the cart, press 0 to exit`));
    }
}

//6. Remove coffees from cart.
const removeCart = () => {

}

//7. Show cart.
const showCart = () => {

}

//8. Cashout.
const cashout = () => {

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
        8. Cashout.`));
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
                //4. List coffe by specific origin.
                let origin = prompt("Enter a country to filter the coffee from");
                originList(origin);
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
                //8. Cashout.
                cashout();
                break;
            default:
                break;
        }
        loop = parseInt(prompt(`Press 1 to continue. Press 0 to exit.`));
    }
}
setTimeout(() => {menu()}, 500);