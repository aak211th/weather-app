import React from 'react'


const Forecast = ({ forecast }) => {
    return(
        <div>
            <center><h3>5 Days Weather Forecast</h3></center>
            <table border="1" id='forecast'> <tbody>
            <th>Date & Time</th>
            <th>High Temp</th>
            <th>Low Temp</th>
            <th>Description</th>
            {
                forecast.map((weather) => (
                       <tr id={weather.dt_txt}>
                         <td>{weather.dt_txt}</td>
                         <td>{weather.main.temp_max} K</td>
                         <td>{weather.main.temp_min} K</td>
                         <td>{weather.weather[0].description}</td>
                       </tr>
                ))
            }
            </tbody></table>
        </div>
    )  
};



export default Forecast