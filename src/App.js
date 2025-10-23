import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createMedia } from '@artsy/fresnel';
import Home from './components/home/Home';
import 'semantic-ui-css/semantic.min.css'
import HomeMobile from './components/mobile/home/HomeMobile';

const {Media, MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }

})

function App() {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeMobile />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;
