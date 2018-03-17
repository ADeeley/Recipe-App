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

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

function retrieveFromStorage() {
    if (storageAvailable('localStorage')) {
        let data = localStorage.getItem('recipes');
        if (data) {
            return JSON.parse(data);
        } else { // Use default recipies for first time users
            let starters = JSON.stringify(starterRecipes);
            localStorage.setItem('recipes', starters);
            return starterRecipes;
        }
    } else {
        // No support for web storage.
    }
}
let recipes = retrieveFromStorage();
ReactDOM.render(<App data={recipes} />, document.getElementById('root'))

