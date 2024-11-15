import Header from "./components/header/Header";
import Page from "./components/Page";
import WeatherBoard from "./components/weather/weatherBoard";
import {
  FavourtieProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavourtieProvider>
          <Page/>
        </FavourtieProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
