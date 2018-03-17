import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: String(this.props.ingredients)}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        console.log(this.state.value)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.callback(this.props.name, this.state.value.split(','))
    }

    render() {
        if (this.props.display) {
        return (
           <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    defaultValue={String(this.props.ingredients)}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
           </form>
        )
        } else {
            return null;
        }
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
                    name={this.props.name}
                    display={this.state.editMode}
                    ingredients={this.props.ingredients}
                    callback={this.props.callback}
                />
                <button onClick={this.toggleEditMode}>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Recipe;
