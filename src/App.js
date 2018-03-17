import React from 'react';
import Recipe from './Recipe';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj = this.props.data;
    }

    modifyIngredients(name, ingr) {
        console.log('Change to  ' + name + ' ' + ingr);
    }

    render() {
        let elements = [];
        for (let rec in this.props.data) {
            if (this.props.data.hasOwnProperty(rec)) {
                let currentRecipe = this.props.data[rec];
                elements.push(
                    <Recipe 
                        key={rec}
                        name={rec} 
                        ingredients={currentRecipe} 
                        callback={this.modifyIngredients} 
                    />
                )                
            }
        }
        return elements; 
    }
}

export default App;
