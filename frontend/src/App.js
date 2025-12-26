import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './routes/Router';
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/Footer";


// <Navbar/> 
//<Footer/>
function App() {
  return (
      
  <BrowserRouter >
        <Navbar />
        <Toaster />
      <AppRouter />
        <Footer />
     </BrowserRouter>   
  
  );
}

export default App;
