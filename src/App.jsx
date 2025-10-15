import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Detail from './pages/Detail/Detail';
import ContextsProvider from './containers/ContextsProvider/ContextsProvider';

function App() {
  return (
    <>
      <Router>
        <div>
          <ContextsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<Detail />} />
            </Routes>
          </ContextsProvider>
        </div>
      </Router>
    </>
  )
}

export default App
