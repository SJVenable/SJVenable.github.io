
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Routing from './Routing';
import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Home></Home>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routing />
    </Router>
  )
}

export default App;