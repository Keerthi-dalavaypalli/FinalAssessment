
import './App.css';
import Reg from './components/Reg';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';

function App() {
  return (
    
      <Router> 
        <Routes>  
          <Route>
                  <Route exact path="/registration" element={<Reg/>} />   
                     <Route exact path="/login" element={<Login />} /> 
                          <Route exact path="/dashboard" element={<Dashboard/>} />     
                           {/* <Route exact path="/password" element={<PasswordForm/>} /> 
                                <Route exact path="/posts" element={<Post/>} />  
                                    <Route exact path="/products" element={<Product/>} />    
                                      <Route exact path="/userListing" element={<User/>} />    
                                        <Route exact path="/todo" element={<Todo/>} />       */}
                                        </Route>
                                        </Routes> 
                                        </Router>
      
    
  );
}

export default App;
