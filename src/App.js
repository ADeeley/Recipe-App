import React from 'react';
import Recipe from './Recipe';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj = this.props.data;
    }
    render() {
        let elements = [];
        for (let rec in this.props.data) {
            if (this.props.data.hasOwnProperty(rec)) {
                let currentRecipe = this.props.data[rec];
                let ingr = currentRecipe.map((el) => <li>{el}</li>)
                elements.push(
                    <Recipe name={rec} ingredients={ingr} />
                )                
            }
        }
        return elements; 
    }
}

export default App;
