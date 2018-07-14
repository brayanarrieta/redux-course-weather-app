import React, {Component} from 'react'
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from './../../services/transformWeather';
import './styles.css';
const location = "Buenos Aires,ar";
const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const urlOpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: null
        }
    }
    //method that is executed after the constructor and before that the render
    componentWillMount = () => {
        this.handleUpdateClick();
      
    }
    //method that is executed after the render
    componentDidMount() {
        
    }
    //method that called before every case to update the view in the webpage
    componentWillUpdate = () => {
      
    }
    //method that called after every case to update the view in the webpage
    componentDidUpdate() {
        
    }
    
    
    handleUpdateClick = () => {
        fetch(urlOpenWeatherMap).then((data) => {
            //convert data to json format
            return data.json();
        }).then((weatherData) => {
            //store the information in a specific format
            const data = transformWeather(weatherData);
            //change the value to state constants
            this.setState({data: data})
        }).catch((params) => {})
    }
    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={this.state.city}/>
                {this.state.data? <WeatherData data={this.state.data}/>: 'Cargando...'}
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        )
    }
}
export default WeatherLocation;