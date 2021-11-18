import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Home, PlayerDetail, NotFound, HallOfFame, About } from './Pages'
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <Router>
          <GlobalStyles />
          <Routes>
              <Route exact path="/" element={<Home/>} />  
              <Route path="/player/:id" element={<PlayerDetail/>} />  
              <Route path="/hallOfFame" element={<HallOfFame/>} />  
              <Route path="/about" element={<About/>} />  
              <Route path="*" element={<NotFound/>} />  
          </Routes> 
      </Router>
    </Provider>
  );
}

export default App;
