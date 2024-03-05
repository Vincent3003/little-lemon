import greekSalad from "../img/greek-salad.jpg";
import lemonDessert from "../img/lemon-dessert.jpg";
import bruchetta from "../img/bruchetta.jpg";

const meals = [
    {
        id: 1,
        image: greekSalad,
        name: 'Greek salad',
        price: 12.99,
        description: 
            'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnish with crunchy garlic and rosemary croutons.',
        order: orderADelivery,
    },
    {
        id: 2,
        image: bruchetta,
        name: 'Bruchetta',
        price: 5.99,
        description: 
            'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        order: orderADelivery,
    },
    {
        id: 3,
        image: lemonDessert,
        name: 'Lemon Dessert',
        price: 5.00,
        description: 
            'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        order: orderADelivery,
    },
];


export default meals;