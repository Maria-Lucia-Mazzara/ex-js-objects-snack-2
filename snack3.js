
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? ho 9 oggetti perchè abbiamo l'oggetto originale le 2 copie
// e in più con la proprietà structuredClone vado a copiare anche gli oggetti annidati 