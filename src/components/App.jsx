import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientsForm from "./ClientsForm";
import Clients from "./Clients";


function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/ClientsForm" element={<ClientsForm />} />
            <Route path="/Clients" element={<Clients />} />
         </Routes>
      </Router>
   );
}

export default App;

