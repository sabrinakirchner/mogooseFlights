import React from 'react';

const New = () => {
return(
    <div>
        <h1>Create New Flight</h1>
        <form action='/flights' method='POST'>
        <label htmlFor='airline'>Airline:</label>
        <select name='airline' required>
            <option value='Southwest'> Southwest </option>
            <option value='United'>United </option>
        </select><br/>

        <label htmlFor='flightNo'> Flight No.:</label>
        <input type='number' name='flightNo' min='10' max='9999' required />

        <label htmlFor='departs'>Departure Date and time:</label>
        <input type='determine-local' name='departs' required /><br /> 

        <button type='submit'> Create Flight</button>

        </form>
    </div>
);
};

export default New; 