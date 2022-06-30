import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';

// Q1. In index.js create an arrow function for calculating a factorial, then pass an integer and display its factorial as root element inside heading tag.
var fact = 1;
const Factorial = (num) => {
      for(let i=num;i>=1;i--){
         fact = fact*i;
      }
      return fact;
    }
    
const x = <h1>{Factorial(5)}</h1>

//Q2. In index.js make an arrow function Prime() that prints all prime nos. from 1 to 100.
const Prime = (number) => {
  var arr=[];
  for(let i=2;i<=number;i++){
    var j=2;
    for(;j<i;j++){
      if(i%j===0){
        break;
      }
    }
    if(j===i){
      arr.push(<p>{i}</p>);
    }
  }
  return arr;
}

var y = <h1>{Prime(100)}</h1>


//Q3. Make an array storing names of cities, then print them as unordered list in ascending order using arrow function and map

const arr = ['lko','kanpur','kolkata','durg','raipur','bangalore','bombay','balrampur'];
const City = (items) => {
   console.log(items[0]);
   return <li>{items}</li>;

}
let sort_arr = arr.sort();
let city_name = <h1><ul>{sort_arr.map(City)}</ul></h1>;


//Q4. In the above task find all the cities whose name start with 'B'
 const Findcity = (items) => {
   if(items[0] === 'b'){
      return <li>{items}</li>;
   }   
 }
 let z = <h1><ul>{arr.map(Findcity)}</ul></h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h3>Q1. In index.js create an arrow function for calculating a factorial, then pass an integer and display its factorial as root element inside heading tag</h3>
    {x}
    <h3>Q2. In index.js make an arrow function Prime() that prints all prime nos. from 1 to 100.</h3>
    {y}
    <h3>Q3. Make an array storing names of cities, then print them as unordered list in ascending order using arrow function and map
</h3> 
    {city_name}
    <h3>Q4. In the above task find all the cities whose name start with 'B'</h3>
    {z}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
