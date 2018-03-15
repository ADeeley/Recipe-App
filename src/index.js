import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';

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

function getRecipies(obj) {
    let recipies = [];
    for (let rec in obj) {
        if (obj.hasOwnProperty(rec)) {
            let list = [];
            for (let ingr in obj[rec]) {
                let item = ingr + '\t-\t' + obj[rec][ingr];
                list.push(<li key={ingr}>{item}</li>)
            }
            recipies.push(<Recipe key={rec} name={rec} ingredients={list} />)
        }
    }
    return <div>{recipies}</div>
}

function retrieveFromStorage() {
    if (typeof(Storage) !== 'undefined') {
        let data = window.localStorage.getItem('Recipes');
        if (data) {
            let recipes = getRecipies(data);
        } else { // Use default recipies for first time users
            let starters = JSON.stringify(starterRecipes);
            window.localStorage.setItem('Recipes', starters);
        }
        return getRecipies(starterRecipes)
    } else {
        // No support for web storage.
    }
}

ReactDOM.render(retrieveFromStorage(), document.getElementById('root'))

