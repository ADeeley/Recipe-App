import React from 'react';

function Input(props) {
  if (props.display) {
    return <input></input>;
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
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul>{this.props.ingredients}</ul>
        <Input display={this.state.editMode} />
        <button onClick={this.toggleEditMode}>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Recipe;
