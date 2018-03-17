import React from 'react';
import Recipe from './Recipe';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj = this.props.data;
        this.state = {'recipes': this.dataObj};
        this.modifyIngredients = this.modifyIngredients.bind(this);
    }

    modifyIngredients(recipe, ingr) {
        console.log('Change to  ' + recipe + ' : ' + ingr);
        this.dataObj[recipe] = ingr;
        this.setState({'recipes': this.dataObj});
        console.log(this.dataObj)
    }

    render() {
        let elements = [];
        for (let rec in this.state.recipes) {
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
