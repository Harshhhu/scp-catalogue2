import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom'; // Add useParams here

import Navmenu from './Navmenu';

import Details from './Details';

import './App.css';

function DetailsWrapper() {

  const { Item } = useParams(); // Now useParams is available

  return <Details Item={Item} />;

}

function App() {

  return (
    <Router>
      <div>
        <Navmenu />
        <Routes>
          <Route path="/" element={<Navigate to="/item/SCP-002" />} />
          <Route path="/item/:Item" element={<DetailsWrapper />} />
        </Routes>
      </div>
    </Router>

  );

}

export default App;

