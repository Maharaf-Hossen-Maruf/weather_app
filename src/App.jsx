import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/weatherBoard";
import { WeatherProvider ,FavourtieProvider} from "./provider";

export default function App() {
  return (
    <WeatherProvider>
      {/* <FavourtieProvider> */}
      <div className="grid place-items-center h-screen ">
        <Header />

        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
      {/* </FavourtieProvider> */}
    </WeatherProvider>
  );
}
