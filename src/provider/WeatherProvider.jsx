/* eslint-disable react/prop-types */
import { WeatherContext } from "../context";
import { useWeather } from "../hooks";


export default function WeatherProvider({children}) {
    const {weather,error,loading} = useWeather()
  return (
    <WeatherContext.Provider value={{weather,error,loading}}>
        {children}
    </WeatherContext.Provider>
  )
}
