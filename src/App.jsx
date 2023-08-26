import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { WeatherProvider } from "./context/Context";

const App = () => {
  return (
    <>
      <WeatherProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </>
  );
};

export default App;
