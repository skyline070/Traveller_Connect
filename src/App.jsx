import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Feed from './components/Feed';
import Coins from './components/Coins';
import Escalations from './components/Escalations';
import Itinerary from './components/Itinerary';
import Blogs from './components/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/escalations" element={<Escalations />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
