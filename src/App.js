import React, {Component} from 'react';
import Forecast from './components/forecast'
import './App.css';

class App extends Component {

state = {
  forecast: [],
  city: '',
  country: '',
};

  render (){
    return (
      <div className='App'>
        <header className="weather-header">
          <center>
          <h1>Weather App</h1>
            City: <input type="text" value={this.state.city} onChange={this.handleChangeCity.bind(this)}/>
            Country: <input type="text" value={this.state.country} onChange={this.handleChangeCountry.bind(this)}/>
          <button onClick={this.fetchData}>Find Weather</button></center>
          <Forecast forecast = {this.state.forecast} />
       </header>
    </div>
    
       
    );
  }

  handleChangeCity(event) {
    this.setState({city: event.target.value});
  }
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  fetchData = () =>  {
    if(this.state.city == "" || this.state.country == ""){
      alert(`Either City or Country is Invalid!`);
    }
    else{
      const encodedCity = encodeURIComponent(this.state.city);
      const encodedCountry = encodeURIComponent(this.state.country);
      console.log(encodedCity);
      console.log(encodedCountry);
      fetch('http://api.openweathermap.org/data/2.5/forecast?q='+encodedCity+','+encodedCountry+'&appid=7cf2b074a66d1e0b745744d9573da82d')
      .then(res => res.json())
      .then((data) => {
        this.setState(this.setState({ forecast: data.list }))
      })
      .catch(console.log)
  }
  }

}

export default App;
