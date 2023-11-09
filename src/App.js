import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import SingleView from './pages/SingleView';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/home' element={<LoginPage></LoginPage>}></Route>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/single/:id' element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
