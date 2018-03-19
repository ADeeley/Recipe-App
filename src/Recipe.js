import React from 'react';
import './Recipe.css';
import './App.css';
import Input from './Input';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editMode: false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.toggleIngr = this.toggleIngr.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode})
    }

    handleDelete() {
        this.props.deleteCallback(this.props.name)
    }

    toggleIngr() {
        let ingr = this.refs['ingr'];
        if (ingr.className === 'hidden') {
            ingr.className = 'visible';
        } else {
            ingr.className = 'hidden';
        }
    }

    render() {
        let ingr = this.props.ingredients.map((el) => <li key={el}>{el}</li>)
        return (
            <div>
                <h3 className="left-border"><a onClick={this.toggleIngr}>{this.props.name}</a></h3>
                <div ref="ingr" className="hidden">
                    <h4 className="light">Ingredients:</h4>
                    <ul >{ingr}</ul>
                    <button className="btn btn-outline-primary" onClick={this.toggleEditMode}>Edit</button>
                    <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete</button>
                    <Input 
                        name={this.props.name}
                        display={this.state.editMode}
                        ingredients={this.props.ingredients}
                        callback={this.props.callback}
                    />
                </div>
            </div>
        )
    }
}

export default Recipe;
