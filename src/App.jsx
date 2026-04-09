import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
