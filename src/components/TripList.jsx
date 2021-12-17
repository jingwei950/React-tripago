import React, { useEffect, useState } from "react";
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    fetch(url) //Use the Fetch API to fetch the data from the URL stated in initial state of useState(), it can change dynamically
      .then((response) => response.json()) //then get the response and convert it to JSON data
      .then((json) => setTrips(json)); //then get the converted JSON data and set the trips with this data
  }, [url]); //Setting the useState variable "url", if this url changes usEffect() will run again

  console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <h3>Trip Title: {trip.title}</h3>
              <p>Price: {trip.price}</p>
            </li>
          );
        })}
      </ul>
      <div className="filter">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;
