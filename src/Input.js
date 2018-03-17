import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
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
        this.props.callback(this.props.name, this.state.name, this.state.value.split(','))
    }

    render() {
        if (this.props.display) {
        return (
           <form onSubmit={this.handleSubmit}>
                Name: <input 
                    type="text" 
                    onChange={this.handleNameChange}
                    defaultValue={
                        this.props.name ? 
                            String(this.props.name) : ''
                    }
                /> 
                Ingr: <input 
                    type="text" 
                    onChange={this.handleValueChange}
                    defaultValue={
                        this.props.ingredients ? 
                            String(this.props.ingredients) : ''
                    }
                />
                <input type="submit" value="Submit" />
           </form>
        )
        } else {
            return null;
        }
    }
}

export default Input;