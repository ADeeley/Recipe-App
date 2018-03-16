import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const starterRecipes = {
    'Jacket Potato': {
        'Potato': '1',
        'Cheese': '1 handfull'
    },

    'Pasta': {
        'Pasta': '1 cup',
        'Cheese': '1 handfull',
        'Tomatoes': '4'
    },
    'Stir Fry': {
        'Onion': '1',
        'Garlic': '1 handfull',
        'Rice': '1 jup'
    }
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

