import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
