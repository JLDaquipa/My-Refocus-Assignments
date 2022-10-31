
const restaurant = {
    "restaurantName": "Web Dev Restaurant",
    "dishes": [
        {"dishID": 1, 
        "dishName": "Adobong Baboy", 
        "dishPrice": 300, 
        "ingredients": ["Pork","Garlic","Dried bay leaves","Vinegar","Soy Sauce","Peppercorn","Salt"]},
    
        {"dishID": 2, 
        "dishName": "Adobong Manok", 
        "dishPrice": 400, 
        "ingredients": ["Chicken","Knorr Chicken Cube","Garlic","Onion","Dried bay leaves","Peppercorn","Soy Sauce","White Vinegar","Brown Sugar","Cooking Oil","Water","Salt"]},
    
        {"dishID": 3, 
        "dishName": "Beefsteak", 
        "dishPrice": 500, 
        "ingredients": ["Beef","Soy Sauce","Garlic","Yellow Onion","Calamansi","Cooking Oil","Water","Salt"]}
    ],
    "displayRestaurantName": function(){
        console.log(this.restaurantName);
    },
    "displayMenu": function(){

// display ingredients using template literals
        for(menu of this.dishes){
console.log(`${menu.dishName}, ₱${menu.dishPrice}
Contains ${menu.ingredients}.\n`); 

        }
    }

}

restaurant.displayRestaurantName()
restaurant.displayMenu()