import React from 'react';
import Recipe from './Recipe';
import Input from './Input';
import nameOrder from './utilities';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj = this.props.data;
        this.state = {
            'recipes': this.dataObj,
            'editMode': false
        };
        this.modifyRecipes = this.modifyRecipes.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode})
    }

    updateBrowserStorage(obj) {
        localStorage.setItem('recipes', JSON.stringify(obj));
    }

    modifyRecipes(existingName, name, ingr) {
        if (existingName && existingName !== name) {
            delete this.dataObj[existingName];
        }
        this.dataObj[name] = ingr;
        this.setState({'recipes': this.dataObj});
        this.updateBrowserStorage(this.dataObj);
    }

    deleteRecipe(name) {
        delete this.dataObj[name];
        this.setState({'recipes': this.dataObj});
        this.updateBrowserStorage(this.dataObj);
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
                        callback={this.modifyRecipes} 
                        deleteCallback={this.deleteRecipe}
                    />
                )                
            }
        }
        console.log(elements[0].props.name)
        elements.sort(nameOrder);
        return (
            <div>
                {elements}
                <hr />
                <button onClick={this.toggleEditMode}>Add Recipe</button>
                <Input 
                    display={this.state.editMode} 
                    callback={this.modifyRecipes}
                />

            </div>
        )
    }
}

export default App;
