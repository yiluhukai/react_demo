import * as actionTypes from './actionTypes';

export const fetchWeatherStarted = () => (
  {
    type: actionTypes.FETCH_STARTED
  }
)

export const fetchWeatherSuccess = (result) => (
  {
    type: actionTypes.FETCH_SUCCESS,
    result
  }
)

export const fetchWeatherFailure = (error) => (
  {
    type: actionTypes.FETCH_FAILURE,
    error
  }
)

export const fetchWeather = (cityCode)=>{
    return (dispatch) => {
      dispatch(fetchWeatherStarted())
      const apiUrl = `/data/cityinfo/${cityCode}.html`;
      fetch(apiUrl).then((response)=>{
          if(response.status !==200){
            throw new Error('Fail to get response with status ' + response.status);
          }
          response.json().then((responseJson) => {
            dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
          }).catch((error) => {
            throw new Error('Invalid json response:'+ error)
          });
      }).catch((error)=>{
          dispatch(fetchWeatherFailure(error))
      })
    }
}

