import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/starship-list' element={<StarshipList />} />
      </Routes>
    </div>
  );
}

export default App;
