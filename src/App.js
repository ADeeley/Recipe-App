import React from 'react';
import Recipe from './Recipe';

class App extends React.Component {
  render() {
      let recipies = [];
      for (let rec in this.props.data) {
          if (this.props.data.hasOwnProperty(rec)) {
              let list = [];
              for (let ingr in this.props.data[rec]) {
                  let item = ingr + '\t-\t' + this.props.data[rec][ingr];
                  list.push(<li key={ingr}>{item}</li>)
              }
              recipies.push(<Recipe key={rec} name={rec} ingredients={list} />)
          }
      }
      return <div>{recipies}</div>
  }
}

export default App;
