import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './routes/Router';
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/Footer";
import rwandareve from "./pages/rwandareve";

// <Navbar/> 
//<Footer/>
function App() {
  return (
      
  <BrowserRouter >
    
        <Toaster />
      <AppRouter />
     
     </BrowserRouter>   
  
  );
}

export default App;
