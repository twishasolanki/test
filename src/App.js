import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
  
    <BrowserRouter>
      <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  

  );
}

export default App;
