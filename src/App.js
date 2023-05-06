import './App.css';
import {Routes, Route} from 'react-router-dom'
import { FirstPage } from './pages/FirstPage';
import { MainPage } from './pages/MainPage';
import { SecondPage } from './pages/SecondPage/SecondPage';
import { Layout } from './components/Layout/layout';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element= { <Layout/> }>
            <Route index element={<MainPage />} />
            <Route path="firstPage" element={<FirstPage />} />
            <Route path="SecondPage" element={<SecondPage />} />
          </Route>           
        </Routes>
    </div>
  );
}

export default App;
