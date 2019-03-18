import React from 'react'
import { connect } from 'react-redux';
import * as Status from './status';
function Weather({ status, cityName, weather, lowstTemp, highestTemp }) {
  switch (status) {
    case Status.LOADING:
      return <div>天气信息请求中。。。</div>
    case Status.SUCCESS:
      return (<div>
        {cityName} {weather} 最低气温:{lowstTemp} 最高气温: {highestTemp}
      </div>)
    case Status.FAILURE:
      return (
        <div>天气信息加载失败</div>
      )
    default: {
      throw new Error('unexpected status' + status)
    }
  }
}

const mapStateToProps = (state) => {
  const weatherData = state.weather;
  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  };
}

export default connect(mapStateToProps,null)(Weather);