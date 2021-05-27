import React from 'react';
import WeatherDay from './WeatherDay.js'

class Weather extends React.Component {

  
constructor(props){
  super(props)
  this.state={
date:this.props.weatherDesc

  }
}

  render() {
    return (
      <>
            <WeatherDay
          date={this.props.date}
        />
      </>
    )
  }
}

export default Weather;


