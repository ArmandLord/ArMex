import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Home } from './Pages'
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <Router>
          <GlobalStyles />
          <Routes>
              <Route path="/" element={<Home/>} />  
          </Routes> 
      </Router>
    </Provider>
  );
}

export default App;
