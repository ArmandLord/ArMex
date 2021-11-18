import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Home, PlayerDetail, NotFound, HallOfFame, About, CreateForm, EditForm } from './Pages'
import store from './redux/store';
import { Navbar } from './components'



function App() {
  return (
    <Provider store={store}>
      <Router>
          <GlobalStyles />
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home/>} />  
              <Route path="/player/:id" element={<PlayerDetail/>} />  
              <Route path="/createPlayer" element={<CreateForm/>} />  
              <Route path="/editPlayer/:id" element={<EditForm/>} />  
              <Route path="/hallOfFame" element={<HallOfFame/>} />  
              <Route path="/about" element={<About/>} />  
              <Route path="*" element={<NotFound/>} />  
          </Routes> 
      </Router>
    </Provider>
  );
}

export default App;
