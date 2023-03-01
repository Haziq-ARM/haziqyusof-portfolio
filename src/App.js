import './App.css';
import Main from './pages/Main';
import SeleniumBot from './pages/SeleniumBot';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/article/selenium' element={<SeleniumBot/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
