/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/




//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [{
    id: 324234,
    category: 0,
    quantity: 1,
    title: 'Margherita',
    description: "Pomodoro, mozzarella e basilico",
    ingredients: ['pomodoro', 'mozzarella', 'basilico'],
    price: 6.5
  },
  {
    id: 098394,
    category: 0,
    quantity: 1,
    title: 'Calzone Classico',
    description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",
    ingredients: ['pomodoro', 'mozzarella', 'prosciutto cotto'],
    price: 7.0
  },
  {
    id: 432432,
    category: 4,
    quantity: 1,
    title: 'Coca Cola Zero (33CL)',
    description: "",
    price: 3.0
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: 'Salamino',
    description: "Pomodoro, mozzarella e salamino piccante",
    ingredients: ['pomodoro', 'mozzarella', 'salamino'],
    price: 7.5
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: 'Salamino',
    description: "Mozzarella, salsiccia, patate al forno",
    ingredients: ['mozzarella', 'salsiccia', 'patate al forno'],
    price: 7.5
  },
  {
    id: 333445,
    category: 4,
    quantity: 1,
    title: 'Acqua Naturale (1L)',
    description: "",
    price: 2
  },
  {
    id: 656765,
    category: 3,
    quantity: 3,
    title: 'Cheesecake Cioccolato',
    description: "Dolce a base di formaggio fresco e topping al cioccolato",
    price: 5
  },
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [{
    id: 0,
    name: "pizze"
  },
  {
    id: 1,
    name: "panini"
  },
  {
    id: 2,
    name: "sushi"
  },
  {
    id: 3,
    name: "dessert"
  },
  {
    id: 4,
    name: "bevande"
  },
];

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/


console.log('----------------getTotalAmount-----------------------')

function getTotalAmount(){
  let somma = 0;
  productsInCart.forEach(product => {
     somma += product.price * product.quantity
  });
  return somma;
}

console.log(getTotalAmount());

/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
*/



console.log('----------------getCategoryCode----------------------')

function getCategoryCode(categoryName){

  for (let category of categories) {
    if(category.name === categoryName) {
      return category.id;
    }
  }
}


console.log(getCategoryCode("sushi"));

/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/

console.log('----------------getCategoryCount----------------------')

function getCategoryCount(categoryName){
  let categoryId;
  for(let category of categories){
    if(category.name === categoryName){
        categoryId = category.id;
    }
  } 
  let productFilter = productsInCart.filter(product =>{
  return categoryId === product.category;
  })
 return productFilter.length;
}


console.log(getCategoryCount("pizze"));


/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/

console.log('----------------removeFromCart----------------------')


function removeFromCart(productId){
for(let product of productsInCart){
  if(product.id === productId){
    product.quantity -= 1;
    return product.quantity === 0 ? productsInCart.splice(product.indexOf, 1) : product.quantity;
  }
}
}

console.log(removeFromCart(656765));
console.log('----------------removeFromCart----------------------')

console.log(removeFromCart(333445));


/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

console.log('----------------printCart----------------------')

function printCart(){
  let totalPrice = 0;
categories.forEach(category => {
  const productsByCategory = productsInCart.filter(items => {
    return category.id === items.category;
  })
  if (productsByCategory.length > 0){
    console.log(`*** ${category.name.toUpperCase()} ***`)
  }
  productsByCategory.forEach(product => {
    console.log(`- ${product.quantity} x ${product.title} (${product.description}) | ${product.price}`)
    totalPrice += product.price * product.quantity;
  })
})
console.log(`*** TOTALE ***`);
console.log(`${totalPrice}€`);
}


printCart();



/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/


console.log('----------------getPizzeBianche----------------------')


function getPizzeBianche() {
    const getCategoryId = (categoryName) => {
      for(let categoryItem of categories) {
        if(categoryItem.name == categoryName) {
          return categoryItem.id;
        }
      }
    }
    let categoryIdPizze = getCategoryId('pizze');
    return productsInCart.filter((product) => {
      return product.category == categoryIdPizze && !product.ingredients.includes('pomodoro');
    }
    );
  }
  
  console.log(getPizzeBianche());
  