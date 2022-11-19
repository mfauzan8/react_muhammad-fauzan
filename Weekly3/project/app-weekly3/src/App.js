import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import PublicApiContainer from './containers/PublicApiContainer';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/public-api" exact element={<PublicApiContainer />} />
    </Routes>
  );
}

export default App;
