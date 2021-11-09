import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router,Switch,  Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import MyOrders from './Pages/MyOrders/MyOrders';
import Booking from './Pages/Booking/Booking';
import AddService from './Pages/AddService/AddService';
import Admin from './Pages/Admin/Admin';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
