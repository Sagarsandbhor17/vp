import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Add } from './components/Add';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
          <Navbar/>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>

    </div>
  );
}

export default App;
