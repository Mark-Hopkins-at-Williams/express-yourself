import { useState, useEffect, React } from 'react'
import { Tree } from 'hierplane';
import axios from 'axios'

import aTree3 from '/Users/markhopkins/Documents/projects/research/express-yourself/expressionparser/tree.json';



const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      hr: 'x+y'
    }
    axios
      .post('http://localhost:5000/', noteObject)
      .then(response => {
        console.log(response)
      })
  }
  
  return <div>
          <div className="split right">  
             <Tree tree={aTree3} />    
          </div>
    
          <div className="split left">
            <div className="centered">
              <h2><span className="sodapop">express</span> yourself</h2>
              <form onSubmit={handleSubmit}>
                <input />
                <button type="submit">&gt;&gt;</button>
              </form>
            </div>
          </div>
           
         </div>;
};

export default App;