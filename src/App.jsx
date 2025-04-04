import{BrowserRouter as Router, Route, Routes, useParams, Navigate} from 'react-router-dom';
import Navmenu from './Navmenu.jsx';
import Details from './Details.jsx';
import './App.css'
 
function DetailsWrapper()
{
  const{Item}=useParams();
  return <Details Item={Item} />
}
function App() {
 
 
  return (
    <Router>
      <div>
        <Navmenu />
        <Routes>
          <Route path="/" element={<Navigate to="/item/SCP-002" />} />
          <Route path="/item/:Item" element={<DetailsWrapper />}/>
        </Routes>
      </div>
     
    </Router>
  )
}
 
export default App



