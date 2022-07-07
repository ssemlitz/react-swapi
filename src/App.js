import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/starship-list' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
