import './App.css';
import Main from './pages/Main';
import SeleniumBot from './pages/SeleniumBot';
import TwitterBot from './pages/TwitterBot';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/article/selenium' element={<SeleniumBot/>}></Route>
        <Route path='/article/twitter' element={<TwitterBot/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
