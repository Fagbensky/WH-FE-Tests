/**
 * In the following React template, display an unordered list (UL) with list items (LI) within it. 
 * The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. 
 * The span elements should be separated by a single space.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  return (
    <>
      <h2>code goes here</h2>
      <ul>
        {props.data.map(res=>{
          return <li>
            <span>
              {res.name}
            </span>
            &nbsp;
            <span>
              {res.age}
            </span>
          </li>
        })}
      </ul>
    </>

  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('test-01')
);