import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  // Invoking People Array from the data.js

  return (
  <main>
    <section className='container'>
      <h3> {people.length} Birthdays today </h3> 
      <List people={people}/>
      <button onClick={() => setPeople([])}> Clear All </button>
      {/* Button when onClick is pressed, will set the people array to be empty,
      as the useState already has Data inside
      Once you reload, the people array will be back to being filled */}
    </section>
  </main>
  )
}

export default App;
