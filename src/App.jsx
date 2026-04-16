import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import ErrorPage from './pages/ErrorPage';
import { TimelineProvider } from './context/TimelineContext';

function App() {
  return (
    <TimelineProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 1000,
              style: {
                borderRadius: '12px',
                background: '#244D3F',
                color: '#fff',
              },
            }}
          />
          <Navbar />
          <main className="grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TimelineProvider>
  );
}

export default App;
