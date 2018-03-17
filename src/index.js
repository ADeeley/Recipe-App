import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const starterRecipes = {
    'Jacket Potato': [
        '1 potato',
        '1 handfull of cheese'
    ],
    'Pasta': [
        '1 cup of pasta',
        '1 handfull of cheese',
        '4 tomatoes'
    ],
    'Stir Fry': [
        '1 onion', 
        '1 clove of garlic',
        '1 cup of rice'
    ]
}
 
function retrieveFromStorage() {
    if (typeof(Storage) !== 'undefined') {
        let data = window.localStorage.getItem('Recipes');
        if (data) {
            return JSON.parse(data);
        } else { // Use default recipies for first time users
            let starters = JSON.stringify(starterRecipes);
            window.localStorage.setItem('Recipes', starters);
            return starters;
        }
    } else {
        // No support for web storage.
    }
}
let recipes = retrieveFromStorage();
ReactDOM.render(<App data={recipes} />, document.getElementById('root'))

