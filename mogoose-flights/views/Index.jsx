import React from 'react';

const Index = ({flights}) =>{
    return(
        <div>
            <h1>All Flights</h1>
            <ul> 
                {flights.map((flight, index) => (
                <li key={index}>
                    <p>Airline: {flight.airline}</p>
                    <p>Flight No.: {flight.flightNo}</p>
                    <p>Departure: {new Date(flight.departs).toLocaleString()}</p> 
                </li>
                   ))}
            </ul>
            <a href='/flights/new'>Create New Flight </a>
        </div>
    );
};

export default Index; 
