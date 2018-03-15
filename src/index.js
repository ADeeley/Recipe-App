import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';

const starterRecipies = {
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
        'Rice': '1 cup'
    }
}

function getChildren(obj) {
    let recipies = [];
    for (let rec in obj) {
        if (obj.hasOwnProperty(rec)) {
            let list = [];
            for (let ing in obj[rec]) {
                list.push(<li>{ing}</li>)
            }
            recipies.push(<Recipe name={rec} ingredients={list} />)
        }
    }
    return <div>{recipies}</div>
}

let recipies = getChildren(starterRecipies)
ReactDOM.render(<Recipe name="Potato" ingredients={recipies} />, document.getElementById('root'))

