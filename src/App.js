
import './App.css';
import Home from './pages/Home';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const ScrollToTop = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  };
  return (
    <div className="App">
       <ScrollToTop />
      <Home/>
     
    </div>
  );
}

export default App;
