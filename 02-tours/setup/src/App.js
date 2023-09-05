import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project' //JSON Data from website

function App() {
  // Start by setting up some state values
  const [loading, setLoading] = useState(true); //Initialise loading as True
  const [tours, setTours] = useState([]); // Initialise tours

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true); //the fetchTours will set loading as always true

    try {
      const response = await fetch(url); // Fetching data from the URL
      const tours = await response.json(); //Response in JSON format
      console.log(tours) //console log returns the JSON data from the url
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };

  useEffect(() => { //Load up once in the window
    fetchTours();
  }, []);

  if (loading) {
    return(
      <main>
       <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2> No Tours Left </h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
    return (
      <main>
        <Tours tours = {tours} removeTour = {removeTour}/>
      </main>
    ) 
  }


export default App
