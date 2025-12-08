import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createMedia } from '@artsy/fresnel';
import Home from './components/home/Home';
import 'semantic-ui-css/semantic.min.css'
import HomeMobile from './components/mobile/home/HomeMobile';
import HomeAbout from './components/about/Home';
import HomeMobileAbout from './components/mobile/About/HomeMobileAbout';
import HomeDonor from './components/donor/Home';
import HomeMobileDonor from './components/mobile/donor/HomeMobileDonor';
import HomeRecipient from './components/recipients/Home';

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
            <Route path='/about' element={<HomeMobileAbout />} />
            <Route path="/donor" element={<HomeMobileDonor />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<HomeAbout />} />
            <Route path='/donor' element={<HomeDonor />} />
            <Route path='/recipients' element={<HomeRecipient />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;
