
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ["Salad", "Meat", "Bread", "Tomato"]
console.log(secondBurger.ingredients[0]); // ["Salad", "Meat", "Bread", "Tomato"]

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 3
// uno che sarebbe l'oggetto originale , uno che è la copia di hamburger quindi (secondBurger), e uno che è l'annidamento dentro hamburger (ingredients)
// ovviamente in concole troviamo sempre stampato Salad perchè abbiamo copiato le proprietà dell'oggetto hamburger 
// ma non anche le proprietà dell'oggetto  ingredients
