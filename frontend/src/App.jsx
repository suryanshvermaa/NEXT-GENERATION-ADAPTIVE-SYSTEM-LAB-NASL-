import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './routes/Home';
import AdminLogin from './routes/AdminLogin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/admin/login' Component={AdminLogin}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
