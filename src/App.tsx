import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import store from "./redux/store";


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
