import React, { useState } from "react";
import "./TripList.css";
import { useFetch } from "../hooks/useFetch";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips } = useFetch(url); //Custom hook

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips &&
          trips.map((trip) => {
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
