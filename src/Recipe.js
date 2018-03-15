import React, { Component } from 'react';

function Recipe(props) {
    return (
      <div >
        <h3>{props.name}</h3>
        <ul>{props.ingredients}</ul>
      </div>
    );
}

export default Recipe;
