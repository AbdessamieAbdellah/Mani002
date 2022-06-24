import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarComp from './components/Navbar/NavbarComp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Products from './pages/Products/Products';
import Tea from './pages/Tea/Tea';
import Coffee from './pages/Coffee/Coffee';
import Special from './pages/Special/Special';
import Limonade from './pages/Limonade/Limonade';
import Home from './pages/Home/Home';
import SignupPage from './pages/SignupPage/SignupPage';





function App() {
  return (
    <Router>
    <div className="App">
     <NavbarComp/>
     <div>
        <Switch>
             
            <Route path='/about' exact>
              <AboutUs/>
            </Route>
            <Route path='/contact-us' exact>
              <ContactUs/>
            </Route>
            <Route path='/products' exact>
              <Products/>
            </Route>
            <Route path='/products/tea' exact> 
              <Tea/>
            </Route>
            
           <Route path='/products/coffee'>
             <Coffee/>
           </Route>
           <Route path='/products/special'>
            <Special/>
           </Route>
           <Route path='/products/limonade'>
             <Limonade/>
           </Route>
           <Route path='/signup'>
             <SignupPage/>
           </Route>

           <Route path='/'>
              <Home/>
             </Route> 
        </Switch>
      </div>








    </div>
    </Router>
  );
}

export default App;
