import React from 'react';
import Recipe from './Recipe';

class RecipeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: String(this.props.ingredients)
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }
    handleValueChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.callback(this.state.name, this.state.value.split(','))
    }

    render() {
        if (this.props.display) {
        return (
           <form onSubmit={this.handleSubmit}>
                Name: <input 
                    type="text" 
                    onChange={this.handleNameChange}
                /> 
                Ingr: <input 
                    type="text" 
                    onChange={this.handleValueChange}
                />
                <input type="submit" value="Submit" />
           </form>
        )
        } else {
            return null;
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj = this.props.data;
        this.state = {
            'recipes': this.dataObj,
            'editMode': false
        };
        this.modifyIngredients = this.modifyIngredients.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode})
    }

    updateBrowserStorage(obj) {
        localStorage.setItem('recipes', JSON.stringify(obj));
    }

    modifyIngredients(recipe, ingr) {
        console.log('Change to  ' + recipe + ' : ' + ingr);
        this.dataObj[recipe] = ingr;
        this.setState({'recipes': this.dataObj});
        this.updateBrowserStorage(this.dataObj);
    }

    addRecipe(name, ingr) {
        console.log('Adding ' + name + ' with ' + ingr);
        this.dataObj[name] = ingr;
        this.setState({'recipes': this.dataObj});
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
        return (
            <div>
                {elements}
                <hr />
                <button onClick={this.toggleEditMode}>Add Recipe</button>
                <RecipeInput 
                    display={this.state.editMode} 
                    callback={this.addRecipe}
                />

            </div>
        )
    }
}

export default App;
