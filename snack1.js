
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name); // Double Cheese Burger

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?  1

// Perchè con questo metodo io ho copiato i vari oggetti ma in memoria ne tengo solo 1 
// infatti per questo motivo se applico delle modifiche alla seconda variabile vengono modificate entrambe 