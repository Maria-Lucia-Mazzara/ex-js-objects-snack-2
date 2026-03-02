
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const chefCopia = { ...chef };
// questo metodo è migliore perchè al suo interno abbiamo delle funzioni 

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

const restaurantCopia = structuredclone(restaurant);
// questo metodo è migliore perchè al suo interno abbiamo delle proprietà come Date