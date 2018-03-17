import React from 'react';

function Input(props) {
    if (props.display) {
        return <input defaultValue={String(props.ingredients)}></input>;
    } else {
        return null;
    }
}

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editMode: false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode})
    }
    render() {
        let ingr = this.props.ingredients.map((el) => <li key={el}>{el}</li>)
        return (
        <div>
            <h3>{this.props.name}</h3>
            <ul>{ingr}</ul>
            <Input 
                display={this.state.editMode}
                ingredients={this.props.ingredients}
            />
            <button onClick={this.toggleEditMode}>Edit</button>
            <button>Delete</button>
        </div>
        )
    }
}

export default Recipe;
